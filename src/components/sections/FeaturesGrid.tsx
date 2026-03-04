import { motion } from 'framer-motion';
import { Code2, Wrench, Cpu, Users, Terminal, BookOpen } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

interface FeaturesGridProps {
    isDark: boolean;
}

// Skill categories derived strictly from CV
const skillCategories = [
    {
        icon: Code2,
        title: 'Programming Languages',
        description: 'Core languages used across academic projects and coursework.',
        tags: cv.skills.programmingLanguages,
    },
    {
        icon: Cpu,
        title: 'Technical Skills',
        description: 'Fundamental computer science and software engineering competencies.',
        tags: cv.skills.technicalSkills,
    },
    {
        icon: Wrench,
        title: 'Tools',
        description: 'Development environments and database tools used in projects.',
        tags: cv.skills.tools,
    },
    {
        icon: Terminal,
        title: 'Systems & Administration',
        description: 'Linux command line, virtual machine configuration, and server management.',
        tags: ['Linux Command Line', 'Virtual Machine Configuration and Management', 'DNS', 'FTP', 'Email Server'],
    },
    {
        icon: BookOpen,
        title: 'Programming Paradigms',
        description: 'Software design approaches applied across multiple academic projects.',
        tags: ['Object-Oriented Programming (OOP)', 'Modular Design', 'CRUD Operations', 'File Handling', 'Data Structures'],
    },
    {
        icon: Users,
        title: 'Soft Skills',
        description: 'Interpersonal and professional skills developed through academic work.',
        tags: cv.skills.softSkills,
    },
];

export function FeaturesGrid({ isDark }: FeaturesGridProps): JSX.Element {
    const bg          = isDark ? '#000000' : '#FFFFFF';
    const textPrimary = isDark ? '#F5F5F5' : '#000000';
    const textMuted   = isDark ? '#B8B8B8' : '#555555';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const cardBg      = isDark ? '#0D0D0D' : '#F8F8F8';
    const tagBg       = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
    const tagColor    = isDark ? 'rgba(245,245,245,0.6)' : 'rgba(0,0,0,0.55)';

    return (
        <section
            id="skills"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="coda-container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-4 mb-12"
                >
                    <span className="label-text" style={{ color: textMuted }}>
                        Competencies
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="display-heading" style={{ color: textPrimary }}>
                            Skills
                        </h2>
                        <p
                            className="font-sans font-normal max-w-sm"
                            style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                        >
                            {cv.skills.programmingLanguages.length} programming languages,
                            {' '}{cv.skills.tools.length} tools, and a range of technical
                            and soft skills developed through academic projects.
                        </p>
                    </div>
                </motion.div>

                {/* 3-col skill card grid — with glow */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={{
                                    hidden:  { opacity: 0, y: 32 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
                                }}
                                className="relative group flex flex-col gap-5 p-7 rounded-[28px] transition-all duration-300"
                                style={{
                                    background: cardBg,
                                    border: `1px solid ${borderColor}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px) scale(1.01)';
                                    (e.currentTarget as HTMLElement).style.borderColor = isDark
                                        ? 'rgba(255,255,255,0.15)'
                                        : 'rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                                    (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                }}
                            >
                                {/* Glow effect */}
                                <GlowingEffect
                                    spread={32}
                                    glow={false}
                                    disabled={false}
                                    proximity={56}
                                    inactiveZone={0.01}
                                    borderWidth={1.5}
                                />

                                {/* Icon — with glow */}
                                <div
                                    className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                        color: isDark ? '#F5F5F5' : '#000000',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                    }}
                                >
                                    <GlowingEffect
                                        spread={16}
                                        glow={false}
                                        disabled={false}
                                        proximity={28}
                                        inactiveZone={0.01}
                                        borderWidth={1}
                                    />
                                    <Icon size={20} strokeWidth={1.8} />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-2">
                                    <h3
                                        className="font-sans font-bold"
                                        style={{ fontSize: 17, letterSpacing: '-0.01em', color: textPrimary }}
                                    >
                                        {category.title}
                                    </h3>
                                    <p
                                        className="font-sans font-normal"
                                        style={{ fontSize: 13, lineHeight: 1.65, color: textMuted }}
                                    >
                                        {category.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-sans font-medium rounded-full px-3 py-1"
                                            style={{
                                                fontSize: 12,
                                                background: tagBg,
                                                color: tagColor,
                                                border: `1px solid ${borderColor}`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
