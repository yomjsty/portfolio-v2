'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
    ExternalLink, Github, Calendar,
    // Tag, ArrowRight
} from 'lucide-react';
import Image from "next/image";
// import Link from "next/link";

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            id: 10,
            title: 'GoStage',
            description: 'A modern web platform for event ticketing and management — enabling users to create events, sell tickets, track attendees, and scan QR codes in real time.',
            image: '/gostage.png',
            technologies: ['Next.js', 'Midtrans', 'QR Code', 'Prisma', 'PostgreSQL'],
            githubUrl: 'https://github.com/yomjsty/gostage',
            liveUrl: 'https://gostage.vercel.app/',
            date: '2025',
        },
        {
            id: 9,
            title: 'Mutatio',
            description: 'A web service for managing changelogs via API key — keeping your project updates organized and easy to track.',
            image: '/mutatio.png',
            technologies: ['Next.js', 'API Key', 'Authentication'],
            githubUrl: 'https://github.com/yomjsty/mutatio',
            liveUrl: 'https://mutatio.vercel.app/',
            date: '2025',
        },
        {
            id: 8,
            title: 'LinkFuse',
            description: 'A smart bio link tool like Linktree — easily share all your important links in one customizable page.',
            image: '/linkfuse.png',
            technologies: ['Next.js', 'Analytics', 'Authentication'],
            githubUrl: 'https://github.com/yomjsty/linkfuse',
            liveUrl: 'https://linkfuse.vercel.app/',
            date: '2025',
        },
        {
            id: 7,
            title: 'Tempat Kopi',
            description: 'A blog that features cafes and coffee spots across Indonesia — discover your next favorite hangout.',
            image: '/tempatkopi.png',
            technologies: ['Next.js', 'ShadCN', 'Authentication'],
            githubUrl: 'https://github.com/yomjsty/tempatkopi',
            liveUrl: 'https://tempatkopi.vercel.app/',
            date: '2025',
        },
        {
            id: 6,
            title: 'xNovel ID',
            description: 'An online platform for reading novels and comics — anytime, anywhere.',
            image: '/xnovelid.png',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
            githubUrl: 'https://github.com/yomjsty/webscans',
            liveUrl: 'https://webscans.vercel.app/',
            date: '2025',
        },
        {
            id: 5,
            title: 'LMS Project',
            description: 'A learning management system designed to simplify online course delivery, track progress, and enhance digital education experiences.',
            image: '/lms-project.png',
            technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
            githubUrl: 'https://github.com/yomjsty/lms-project',
            liveUrl: 'https://lms-project-nwfs.vercel.app/',
            date: '2024',
        },
        {
            id: 4,
            title: 'Klare',
            description: 'Modern e-commerce app with seamless payments powered by Midtrans. Shop easily, pay securely.',
            image: '/klare.png',
            technologies: ['Next.js', 'Midtrans'],
            githubUrl: 'https://github.com/yomjsty/klare',
            liveUrl: 'https://klare.vercel.app/',
            date: '2024',
        },
        {
            id: 3,
            title: 'Our Anime List',
            description: 'A web app that pulls anime data from platforms like MyAnimeList, giving you detailed info, ratings, and recommendations — just like IMDb, but for anime.',
            image: '/animelist.png',
            technologies: ['Next.js', 'API'],
            githubUrl: 'https://github.com/yomjsty/animelist',
            liveUrl: 'https://animelist-xi.vercel.app/',
            date: '2024',
        },
        {
            id: 2,
            title: 'TravelTales Blog',
            description: 'CMS-powered blog for passionate travelers, offering an easy way to publish stories, tips, and travel inspiration from around the world.',
            image: '/traveltales.png',
            technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
            githubUrl: 'https://github.com/yomjsty/TravelTales',
            liveUrl: 'https://traveltales-blog.vercel.app/',
            date: '2024',
        },
        {
            id: 1,
            title: 'MoodMeal',
            description: 'AI-powered web app that recommends meals based on your mood. Just pick how you feel, and MoodMeal serves up the perfect dish to match your vibe.',
            image: '/moodmeal.png',
            technologies: ['Next.js', 'TypeScript', 'Gemini API'],
            githubUrl: 'https://github.com/yomjsty/MoodMeal',
            liveUrl: 'https://moodmeal.vercel.app/',
            date: '2024',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I&apos;ve worked on, showcasing my skills and passion for development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group card-dark rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <div className="w-full h-48 bg-gradient-secondary flex items-center justify-center">
                                    <Image src={project.image} alt={project.title} width={600} height={400} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex gap-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    {/* <div className="flex items-center gap-2">
                                        <Tag size={16} className="text-blue-400" />
                                        <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                                    </div> */}
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-gray-500" />
                                        <span className="text-sm text-gray-500">{project.date}</span>
                                    </div>
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <Link href="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 mx-auto group"
                        >
                            <span>See All Projects</span>
                            <motion.div
                                className="group-hover:translate-x-1 transition-transform"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                            >
                                <ArrowRight size={20} />
                            </motion.div>
                        </motion.button>
                    </Link>
                    <p className="text-gray-500 text-sm mt-3">
                        Explore my complete portfolio of projects and case studies
                    </p>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Projects;