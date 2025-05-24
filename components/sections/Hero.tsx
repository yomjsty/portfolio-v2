'use client';

import { motion } from 'motion/react';
import { ChevronDown, Download, Github, Linkedin, Mail, Coffee, Code, Heart } from 'lucide-react';
import Image from "next/image";

const Hero = () => {
    const handleScrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/yomjsty', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/akbarthenawan/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:akbarknawan@gmail.com', label: 'Email' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
                />

                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 right-20 text-blue-400"
                >
                    <Code size={32} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-32 left-20 text-purple-400"
                >
                    <Coffee size={28} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    className="absolute top-1/3 left-10 text-pink-400"
                >
                    <Heart size={24} />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-lg text-gray-400 mb-4"
                        >
                            Hello, I&apos;m
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="text-gradient">Akbar Krishnawan</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 mb-6"
                        >
                            Computer System Student & Full-Stack Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg text-gray-400 max-w-2xl lg:max-w-none mb-8"
                        >
                            Passionate about creating innovative web solutions with modern technologies.
                            Currently studying at Sriwijaya University, specializing in Next.js, Node.js, and database technologies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                        >
                            <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group">
                                <Download size={20} />
                                Download CV
                                <motion.span
                                    className="group-hover:translate-x-1 transition-transform"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                >
                                    →
                                </motion.span>
                            </button>
                            <button
                                onClick={handleScrollToAbout}
                                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
                            >
                                Learn More
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex justify-center lg:justify-start gap-6"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 text-gray-300 hover:text-blue-400"
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-primary rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-glow relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
                                <Image src="/akbar.jpg" alt="Akbar Krishnawan" className="rounded-full w-full h-full object-cover object-center" width={500} height={500} />

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-4 border-dashed border-blue-300/30 rounded-full"
                                ></motion.div>

                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 border-2 border-dotted border-purple-300/30 rounded-full"
                                ></motion.div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                            >
                                🚀 Developer
                            </motion.div>

                            {/* <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                            >
                                ☕ Coffee Lover
                            </motion.div> */}
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={handleScrollToAbout}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                    <ChevronDown size={32} />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;