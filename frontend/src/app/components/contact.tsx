export default function Contact() {
    return (
        <div className="flex flex-col items-center h-screen">
            <div>
                <h1>Please message me, zomg</h1>
            </div>
            <form className="flex flex-col border-[1px] border-gray-500 p-6 rounded-md min-w-1/3 gap-4">
                <label>Name</label>
                <input name="name" type="text"></input>
                <label>Email</label>
                <input name="email" type="text"></input>
                <label>Message</label>
                <textarea className="h-36" name="message"></textarea>
                <input className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium border-none" type="submit"></input>
            </form>
        </div>
    )
}