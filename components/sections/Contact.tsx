'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
    Mail,
    // Phone, 
    MapPin, Send, Github, Linkedin,
    // Twitter,
    Instagram
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'akbarknawan@gmail.com',
            };

            await emailjs.send(
                'service_8hj4vsm',
                'template_av2q6zz',
                templateParams,
                'yXVjtvj3c06yUCe76'
            );

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! I\'ll get back to you soon.',
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch {
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error sending your message. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'akbarknawan@gmail.com',
            href: 'mailto:akbarknawan@gmail.com',
        },
        // {
        //     icon: Phone,
        //     label: 'Phone',
        //     value: '+62 812-3456-7890',
        //     href: 'tel:+6281234567890',
        // },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Palembang, South Sumatra, Indonesia',
            href: '#',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/yomjsty',
            color: 'hover:text-gray-300',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/akbarthenawan/',
            color: 'hover:text-blue-400',
        },
        {
            icon: Instagram,
            label: 'Instagram',
            href: 'https://instagram.com/akbarknawan',
            color: 'hover:text-blue-400',
        },
        // {
        //     icon: Twitter,
        //     label: 'Twitter',
        //     href: 'https://twitter.com',
        //     color: 'hover:text-blue-400',
        // },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:akbarknawan@gmail.com',
            color: 'hover:text-red-400',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="card-dark rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="p-3 bg-gradient-primary rounded-lg">
                                            <info.icon className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                                            {info.href !== '#' ? (
                                                <a
                                                    href={info.href}
                                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-700">
                                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-3 bg-gray-700 rounded-full text-gray-400 transition-all duration-300 ${social.color}`}
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-secondary rounded-xl">
                                <h4 className="text-lg font-semibold text-white mb-2">Let&apos;s Work Together</h4>
                                <p className="text-gray-400 text-sm">
                                    I&apos;m currently available for freelance work and full-time opportunities.
                                    Feel free to reach out if you have a project in mind or just want to connect!
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="card-dark rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {submitStatus.type && (
                                    <div
                                        className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                            ? 'bg-green-500/20 text-green-300'
                                            : 'bg-red-500/20 text-red-300'
                                            }`}
                                    >
                                        {submitStatus.message}
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 