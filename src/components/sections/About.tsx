import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

interface AboutProps {
    isDark: boolean;
}

const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'R', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Tailwind', 'Next.js'] },
    { category: 'Database & Tools', items: ['MySQL', 'SQLite', 'MongoDB', 'Git', 'Linux'] },
    { category: 'Concepts', items: ['Machine Learning', 'Data Analysis', 'OOP', 'Networking'] },
];

export function About({ isDark }: AboutProps) {
    return (
        <Section id="about" className={`transition-colors duration-300 ${isDark ? 'bg-transparent' : 'bg-transparent'}`}>
            <Container>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <Typography variant="label" className={isDark ? 'text-white/40' : ''}>Background</Typography>
                        <Typography variant="h2" className={isDark ? 'text-[#E8E8E5]' : ''}>About Me</Typography>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-6"
                        >
                            <Typography variant="p" className={isDark ? 'text-white/50' : ''}>
                                I am an Artificial Intelligence Developer with a passion for building scalable, intelligent systems.
                                My focus lies in bridging the gap between complex data algorithms and robust enterprise architecture.
                            </Typography>
                            <Typography variant="p" className={isDark ? 'text-white/50' : ''}>
                                With a strong foundation in a variety of programming languages and frameworks,
                                I specialize in developing solutions that optimize operations, from predictive modeling
                                to comprehensive management systems and secure network infrastructures.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {skills.map((skillGroup, index) => (
                                <Card
                                    key={index}
                                    className={`flex flex-col gap-4 group hover:border-primary/50 transition-colors ${isDark ? 'bg-[#181818] border-white/10 hover:bg-[#1f1f1f]' : ''}`}
                                >
                                    <Typography
                                        variant="label"
                                        className={`group-hover:text-primary transition-colors ${isDark ? 'text-white/60' : 'text-text-primary'}`}
                                    >
                                        {skillGroup.category}
                                    </Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className={`text-[11px] font-mono px-2 py-1 border rounded transition-colors group-hover:border-primary/30 ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-background border-border text-text-muted'}`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
