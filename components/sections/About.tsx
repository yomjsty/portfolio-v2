'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
    GraduationCap, MapPin, Calendar, User,
    // Coffee, Code, Gamepad2 
} from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        // { label: 'Years of Study', value: '3+' },
        { label: 'Projects Completed', value: '15+' },
        // { label: 'Technologies Learned', value: '10+' },
        { label: 'Coffee Consumed', value: '∞' },
    ];

    const education = [
        {
            degree: 'Bachelor of Computer System',
            institution: 'Sriwijaya University',
            period: '2021 - Present',
            description: 'Focusing on software engineering, database systems, and web development technologies.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Get to know more about my background, education, and passion for technology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-glow relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
                                    <span className="relative z-10">👨‍💻</span>

                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                        className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                                    >
                                        <Coffee size={16} className="text-yellow-800" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
                                    >
                                        <Code size={16} className="text-green-800" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 -right-4 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center"
                                    >
                                        <Gamepad2 size={12} className="text-pink-800" />
                                    </motion.div>
                                </div>
                            </div>
                        </div> */}

                        <div className="card-dark rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <User className="text-blue-400" size={20} />
                                    <span className="text-gray-300">Akbar Krishnawan</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-blue-400" size={20} />
                                    <span className="text-gray-300">Palembang, South Sumatra, Indonesia</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="text-blue-400" size={20} />
                                    <span className="text-gray-300">Computer System Student</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-blue-400" size={20} />
                                    <span className="text-gray-300">Available for opportunities</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                            className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700"
                                        >
                                            <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    I&apos;m a passionate Computer System student at Sriwijaya University with a deep
                                    interest in full-stack web development. My journey in technology began with
                                    curiosity about how websites work, which led me to explore various programming
                                    languages and frameworks.
                                </p>
                                <p>
                                    Currently, I specialize in modern web technologies including Next.js, React,
                                    Node.js, and database management with Prisma and PostgreSQL. I enjoy creating
                                    efficient, scalable, and user-friendly applications that solve real-world problems.
                                </p>
                                {/* <p>
                                    When I&apos;m not coding, you can find me exploring new technologies, contributing
                                    to open-source projects, or sharing knowledge with fellow developers. I believe
                                    in continuous learning and staying updated with the latest industry trends.
                                </p> */}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="card-dark rounded-lg p-6 border-l-4 border-blue-500"
                                >
                                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                                    <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                                    <p className="text-gray-400">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 