'use client';

import { motion } from 'motion/react';
import {
    Github, Linkedin,
    //  Twitter,
    Mail, Heart, ArrowUp, Instagram
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
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
        //     href: 'https://twitter.com',
        //     label: 'Twitter',
        //     color: 'hover:text-blue-400',
        // },
        {
            icon: Mail,
            href: 'mailto:akbarknawan@gmail.com',
            label: 'Email',
            color: 'hover:text-red-400',
        },
    ];

    return (
        <footer className="bg-gray-950 text-white relative z-10">
            <motion.button
                onClick={handleScrollToTop}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white p-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 z-20"
            >
                <ArrowUp size={24} />
            </motion.button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-gradient">Akbar Krishnawan</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Computer System student at Sriwijaya University, passionate about creating
                            innovative web solutions with modern technologies. Always eager to learn
                            and take on new challenges.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-3 bg-gray-800 rounded-full text-gray-400 transition-all duration-300 ${social.color}`}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleNavClick(link.href)}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>Palembang, South Sumatra</p>
                            <p>Indonesia</p>
                            <a
                                href="mailto:akbarknawan@gmail.com"
                                className="block hover:text-white transition-colors duration-300"
                            >
                                akbarknawan@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="border-t border-gray-800 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Akbar Krishnawan. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>Made with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Heart size={16} className="text-red-500 fill-current" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
            </div>
        </footer>
    );
};

export default Footer; 