import React, { useState, FormEvent } from 'react';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Button } from '../shared/Button';
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement actual form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for joining our newsletter!');
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
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
                                    placeholder="your.email@example.com"
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
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-box-border bg-body text-heading-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Additional comments or questions"
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button 
                                type="submit" 
                                className="w-full py-4 text-lg transform transition-transform duration-300 hover:scale-105"
                            >
                                Join Newsletter
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
}