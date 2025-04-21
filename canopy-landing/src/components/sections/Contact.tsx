import React, { useState } from 'react';
import axios from 'axios';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Paragraph } from '../shared/Paragraph';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        
        try {
            const response = await axios.post(
                'https://script.google.com/macros/s/AKfycbwbhqW7wPxxiC6ss-OvV8knGRJOARG3Ma4gWX11kFOxAghP9YKurL7-YjA_E18577dCFw/exec', 
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    withCredentials: false,
                    timeout: 10000
                }
            );

            if (response.data.result === 'success') {
                alert('Thank you for joining our newsletter!');
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitError(response.data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Submission error', error);
            if (axios.isAxiosError(error)) {
                // More specific error handling
                if (error.response) {
                    // The request was made and the server responded with a status code
                    setSubmitError(error.response.data.message || 'Server error');
                } else if (error.request) {
                    // The request was made but no response was received
                    setSubmitError('No response from server');
                } else {
                    // Something happened in setting up the request
                    setSubmitError('Error preparing request');
                }
            } else {
                setSubmitError('An unexpected error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 bg-body">
            <Container>
                <div className="max-w-xl mx-auto text-center mb-12">
                    <Title>Join Our Newsletter</Title>
                    <Paragraph className="mt-4 text-body-text">
                        Stay updated with the latest innovations, product updates, and exclusive offers.
                    </Paragraph>
                </div>

                <div className="max-w-lg mx-auto bg-box-bg border border-box-border rounded-3xl p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-heading-2 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-box-border bg-body text-heading-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-heading-2 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-box-border bg-body text-heading-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email Address"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-heading-2 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-box-border bg-body text-heading-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Newsletter or Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-heading-2 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-box-border bg-body text-heading-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Additional comments or questions"
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="w-full px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition duration-300"
                            >
                                Join Newsletter
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};