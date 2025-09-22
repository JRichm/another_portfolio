import os
import json
from dotenv import load_dotenv

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse

load_dotenv()

from clickup_apy.wrapper import ClickUpAPI

clickup = ClickUpAPI()

def hello_world(request):
    return JsonResponse({"message": "Hello world"})

@csrf_exempt
def contact_form(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            message = data.get("message")

            task_data = {
                "name": f"Portfolio Contact: {name}",
                "description": f"""
                    **Name**
                    {name}
                    **Email**
                    {email}
                    **Message**
                    {message}
                """,
                "custom_fields": [
                    {
                        "id": "350e4040-a06b-490b-9514-f26ecee6d8ee",
                        "value": email
                    }
                ]
            }

            response = clickup.post(
                endpoint=f"/list/{os.getenv('CONTACT_LIST_ID')}/task",
                json_data=task_data        
            )

            return JsonResponse({"success": True, "message": "Message Received!"})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=400)
        
    return JsonResponse({"success": False, "error": "Only POST allowed!"}, status=405)