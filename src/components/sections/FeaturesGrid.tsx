import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Network } from 'lucide-react';

interface FeaturesGridProps {
    isDark: boolean;
}

const features = [
    { title: 'Programming', skills: ['Python', 'Java', 'R', 'SQL', 'TypeScript'], label: 'CORE LANGUAGES', icon: Code2 },
    { title: 'AI Systems', skills: ['Machine Learning', 'Predictive Modeling', 'Data Analysis'], label: 'INTELLIGENCE', icon: Cpu },
    { title: 'Data Engineering', skills: ['Data Pipelines', 'Database Design', 'SQL Optimization'], label: 'INFRASTRUCTURE', icon: Database },
    { title: 'Network & Linux', skills: ['System Administration', 'Network Protocols', 'Server Setup'], label: 'OPERATIONS', icon: Network },
];

export function FeaturesGrid({ isDark }: FeaturesGridProps) {
    return (
        <Section id="features" className={`transition-colors duration-300 ${isDark ? 'bg-transparent' : 'bg-transparent'}`}>
            <Container>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <Typography variant="label" className={isDark ? 'text-white/40' : ''}>Expertise</Typography>
                        <Typography variant="h2" className={isDark ? 'text-[#E8E8E5]' : ''}>Technical Competencies</Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className={`h-full flex flex-col gap-6 group hover:border-primary/50 text-center items-center p-8 ${isDark ? 'bg-[#181818] border-white/10 hover:bg-[#1f1f1f]' : ''}`}>
                                    <div className="flex flex-col items-center gap-4">
                                        <feature.icon className={`w-5 h-5 group-hover:text-primary transition-colors shrink-0 ${isDark ? 'text-white/30' : 'text-text-muted'}`} />
                                        <Typography variant="label" className={`group-hover:text-primary transition-colors ${isDark ? 'text-white/40' : ''}`}>{feature.label}</Typography>
                                    </div>
                                    <div className="flex flex-col flex-grow items-center justify-center w-full gap-4">
                                        <Typography variant="h3" className={`text-lg leading-tight ${isDark ? 'text-[#E8E8E5]' : ''}`}>{feature.title}</Typography>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {feature.skills.map((skill, i) => (
                                                <span key={i} className={`text-[11px] font-mono px-2 py-1 border rounded ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-background border-border text-text-muted'}`}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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
