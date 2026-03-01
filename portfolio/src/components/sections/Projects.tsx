import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

interface ProjectsProps {
    isDark: boolean;
}

const projects = [
    { title: 'Hotel Management System', description: 'Comprehensive system for managing operations, bookings, and customer data.', tags: ['Python', 'GUI', 'SQLite'] },
    { title: 'Patient Management System', description: 'Healthcare administration platform with secure record keeping and scheduling.', tags: ['Java', 'OOP', 'MySQL'] },
    { title: 'Flight Delay Prediction', description: 'Machine learning model predicting flight delays based on historical data.', tags: ['R', 'Machine Learning', 'Data Analysis'] },
    { title: 'Hotel Booking DB', description: 'Optimized relational database schema for high-volume booking transactions.', tags: ['SQL', 'Database Design', 'Optimization'] },
    { title: 'Linux Network Administration', description: 'Configuration and securing of Linux-based server networks.', tags: ['Linux', 'Networking', 'Security'] },
];

export function Projects({ isDark }: ProjectsProps) {
    return (
        <Section id="projects" className={`transition-colors duration-300 ${isDark ? 'bg-transparent' : ''}`}>
            <Container>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <Typography variant="label" className={isDark ? 'text-white/40' : ''}>Selected Work</Typography>
                        <Typography variant="h2" className={isDark ? 'text-[#E8E8E5]' : ''}>Featured Projects</Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className={`h-full flex flex-col gap-4 ${isDark ? 'bg-[#181818] border-white/10 hover:bg-[#1f1f1f]' : ''}`}>
                                    <Typography variant="h3" className={`text-xl ${isDark ? 'text-[#E8E8E5]' : ''}`}>{project.title}</Typography>
                                    <Typography variant="p" className={`text-sm flex-grow ${isDark ? 'text-white/50' : ''}`}>{project.description}</Typography>
                                    <div className={`flex flex-wrap gap-2 pt-4 border-t mt-2 ${isDark ? 'border-white/10' : 'border-border'}`}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={`text-xs font-mono px-2 py-1 border rounded ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-background border-border text-text-muted'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
