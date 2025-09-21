'use client'

import { useState, FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

interface FormData {
    name: string
    email: string
    message: string
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const clickupUrl = `https://api.clickup.com/api/v2/list/${process.env.CONTACT_LIST_ID}/task`

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        
        const messageData = {
            name: `Portfolio Contact: ${formData.name}`,
            description: `
                **Name:** ${formData.name}
                **Email:** ${formData.email}
                **Message:**
                ${formData.message}
            `,
            status: 'to do',
            tags: ['portfolio-contact']
        }

        try {
            const response = await fetch(clickupUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `${process.env.CLICKUP_API_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Task created:', result);
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error creating task:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <section id="contact" className="bg-gray-900 pt-64 px-4 h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Let's Talk
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                    <p className="text-gray-600 dark:text-gray-300">jamcamcode@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                    <p className="text-gray-600 dark:text-gray-300">Remote / Lehi, UT</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
                                    <p className="text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name *
                                </label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors" placeholder="your.email@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-vertical" placeholder="Tell me about your project or how I can help..." />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:cursor-pointer hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed" >
                                {
                                    isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Send Message</span>
                                        </>
                                    )
                                }
                            </button>
                            {
                                submitStatus === 'success' && (
                                    <div className="text-green-600 text-sm text-center">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )
                            }
                            {
                                submitStatus === 'error' && (
                                    <div className="text-red-600 text-sm text-center">
                                        There was an error sending your message. Please try again.
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}