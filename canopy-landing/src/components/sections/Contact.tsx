import React, { useState } from 'react';
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

    //const [isSubmitting, setIsSubmitting] = useState(false);
    //const [submitError, setSubmitError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //setIsSubmitting(true);
        //setSubmitError('');

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzbc27fDZU3wdv2LFn39b-cfQA8aAPQwgAATaa2kam8sDDRr7-z0xw8gh_z0wxL8vLTVw/exec', {
                method: 'POST',
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(formData),
                redirect: 'follow'
            });

            const result = await response.json();

            if (result.result === 'success') {
                alert('Thank you for joining our newsletter!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } 
        } catch (error) {
            console.error('Submission error', error);
            //setSubmitError('An error occurred. Please try again later.');
        } finally {
            //setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 bg-body">
            <Container>
                <div className="max-w-xl mx-auto text-center mb-12">
                    <Title>Interested in Learning More?</Title>
                    <Paragraph className="mt-4 text-body-text">
                        Join for updates when a demo is ready! Interested in a chat or demo or have any comments you wish to share? Say so in the description and we'll get back ASAP.
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
                                className="px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border dark:bg-blue-500 border-transparent"
                                style={{
                                    backgroundColor: '#3B82F6' //tailwind css blue
                                }}
                            >
                                <span className="text-white">Join Newsletter</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};