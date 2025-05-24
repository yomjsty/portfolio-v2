'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
    Database,
    Globe,
    Server,
    Code2,
    Layers,
    Lock,
    LucideIcon
} from 'lucide-react';

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiHtml5,
    SiNodedotjs,
    SiJavascript,
    SiPython,
    SiPostgresql,
    SiPrisma,
    SiMongodb,
    SiGit
} from 'react-icons/si';
import { IconType } from 'react-icons';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getSkillIcon = (skillName: string): IconType | LucideIcon => {
        const iconMap: { [key: string]: IconType | LucideIcon } = {
            'Next.js': SiNextdotjs,
            'React': SiReact,
            'TypeScript': SiTypescript,
            'Tailwind CSS': SiTailwindcss,
            'HTML/CSS': SiHtml5,
            'Node.js': SiNodedotjs,
            'API Development': Layers,
            'Authentication': Lock,
            'JavaScript': SiJavascript,
            'Python': SiPython,
            'PostgreSQL': SiPostgresql,
            'Prisma ORM': SiPrisma,
            'MongoDB': SiMongodb,
            'NeonDB': Database,
            'Git/GitHub': SiGit,
        };
        return iconMap[skillName] || Code2;
    };

    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Globe,
            skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
        },
        {
            title: 'Backend Development',
            icon: Server,
            skills: ['Node.js', 'API Development', 'Authentication', 'JavaScript', 'Python'],
        },
        {
            title: 'Database & Tools',
            icon: Database,
            skills: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'NeonDB', 'Git/GitHub'],
        },
    ];

    // const technologies = [
    //     { name: 'Next.js', icon: SiNextdotjs },
    //     { name: 'React', icon: SiReact },
    //     { name: 'TypeScript', icon: SiTypescript },
    //     { name: 'Tailwind CSS', icon: SiTailwindcss },
    //     { name: 'HTML/CSS', icon: SiHtml5 },
    //     { name: 'Node.js', icon: SiNodedotjs },
    //     { name: 'API Development', icon: Layers },
    //     { name: 'Authentication', icon: Lock },
    //     { name: 'PostgreSQL', icon: SiPostgresql },
    //     { name: 'Prisma ORM', icon: SiPrisma },
    //     { name: 'MongoDB', icon: SiMongodb },
    //     { name: 'NeonDB', icon: Database },
    //     { name: 'Git/GitHub', icon: SiGit },
    //     { name: 'JavaScript', icon: SiJavascript },
    //     { name: 'Python', icon: SiPython },
    // ];

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Here are the technologies I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="card-dark rounded-2xl p-8 hover:shadow-glow transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-primary rounded-lg">
                                    <category.icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => {
                                    const SkillIcon = getSkillIcon(skill);
                                    return (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{
                                                duration: 0.4,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3
                                            }}
                                            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300 group"
                                        >
                                            <div className="p-2 bg-gradient-primary rounded-md group-hover:scale-110 transition-transform duration-300">
                                                <SkillIcon size={16} className="text-white" />
                                            </div>
                                            <span className="text-gray-300 font-medium">{skill}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 font-medium hover:shadow-glow hover:border-blue-500 transition-all duration-300 cursor-default group"
                            >
                                <div className="p-1 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <tech.icon size={14} className="text-white" />
                                </div>
                                <span>{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Skills; 