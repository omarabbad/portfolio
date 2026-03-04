import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
    isDark: boolean;
}

const projects = [
    {
        year: '2024',
        title: 'Hotel Management System',
        industry: 'Hospitality',
        tags: ['Python', 'SQLite', 'GUI'],
        description: 'Comprehensive system for managing operations, bookings, and customer data with a full GUI interface.',
    },
    {
        year: '2024',
        title: 'Patient Management System',
        industry: 'Healthcare',
        tags: ['Java', 'MySQL', 'OOP'],
        description: 'Healthcare administration platform with secure record keeping, scheduling, and patient data management.',
    },
    {
        year: '2023',
        title: 'Flight Delay Prediction',
        industry: 'Aviation / ML',
        tags: ['R', 'Machine Learning', 'Data Analysis'],
        description: 'Machine learning model predicting flight delays with high accuracy based on historical flight data.',
    },
    {
        year: '2023',
        title: 'Hotel Booking Database',
        industry: 'Hospitality',
        tags: ['SQL', 'Database Design'],
        description: 'Optimized relational database schema engineered for high-volume booking transactions.',
    },
    {
        year: '2023',
        title: 'Linux Network Administration',
        industry: 'Infrastructure',
        tags: ['Linux', 'Networking', 'Security'],
        description: 'Configuration and hardening of Linux-based server networks with security best practices.',
    },
];

export function Projects({ isDark }: ProjectsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const textPrimary   = isDark ? '#FFFFFF' : '#111111';
    const textSecondary = isDark ? '#9A9A9A' : '#6B6B6B';
    const borderColor   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const hoverBg       = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';

    return (
        <section id="projects" className="w-full py-24 md:py-32">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-end justify-between mb-16 pb-6"
                    style={{ borderBottom: `1px solid ${borderColor}` }}
                >
                    <div className="flex flex-col gap-3">
                        <span
                            className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                            style={{ color: '#FF4D00' }}
                        >
                            Selected Work
                        </span>
                        <h2
                            className="font-sans font-extrabold leading-[1.0] tracking-[-0.02em]"
                            style={{
                                fontSize: 'clamp(48px, 6vw, 96px)',
                                color: textPrimary,
                            }}
                        >
                            Case Studies
                        </h2>
                    </div>
                    <span
                        className="hidden md:block font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                        style={{ color: textSecondary }}
                    >
                        {projects.length} Projects
                    </span>
                </motion.div>

                {/* Column headers */}
                <div
                    className="hidden md:grid grid-cols-12 gap-6 pb-4 mb-2"
                    style={{ borderBottom: `1px solid ${borderColor}` }}
                >
                    {['Year', 'Project', 'Industry', 'Stack', ''].map((col, i) => (
                        <div
                            key={i}
                            className={`font-sans font-medium text-[11px] tracking-[0.2em] uppercase ${
                                i === 0 ? 'col-span-1' :
                                i === 1 ? 'col-span-4' :
                                i === 2 ? 'col-span-2' :
                                i === 3 ? 'col-span-4' :
                                'col-span-1'
                            }`}
                            style={{ color: textSecondary, opacity: 0.6 }}
                        >
                            {col}
                        </div>
                    ))}
                </div>

                {/* Project rows */}
                <div>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative"
                            style={{
                                borderBottom: `1px solid ${borderColor}`,
                                background: hoveredIndex === index ? hoverBg : 'transparent',
                                transition: 'background 0.2s ease',
                            }}
                        >
                            {/* Accent left bar on hover */}
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-200"
                                style={{
                                    background: '#FF4D00',
                                    opacity: hoveredIndex === index ? 1 : 0,
                                }}
                            />

                            {/* Desktop row */}
                            <div className="hidden md:grid grid-cols-12 gap-6 py-6 px-4 items-center">
                                {/* Year */}
                                <div className="col-span-1">
                                    <span
                                        className="font-sans font-normal text-[13px] tabular-nums"
                                        style={{ color: textSecondary }}
                                    >
                                        {project.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="col-span-4 flex flex-col gap-1">
                                    <span
                                        className="font-sans font-semibold text-[18px] leading-tight transition-colors duration-200"
                                        style={{
                                            color: hoveredIndex === index ? '#FF4D00' : textPrimary,
                                        }}
                                    >
                                        {project.title}
                                    </span>
                                    {hoveredIndex === index && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="font-sans font-normal text-[13px] leading-[1.5]"
                                            style={{ color: textSecondary }}
                                        >
                                            {project.description}
                                        </motion.span>
                                    )}
                                </div>

                                {/* Industry */}
                                <div className="col-span-2">
                                    <span
                                        className="font-sans font-normal text-[13px]"
                                        style={{ color: textSecondary }}
                                    >
                                        {project.industry}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="col-span-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="font-sans font-medium text-[11px] tracking-[0.08em] uppercase px-2.5 py-1"
                                            style={{
                                                border: `1px solid ${borderColor}`,
                                                color: textSecondary,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="col-span-1 flex justify-end">
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-all duration-200"
                                        style={{
                                            color: hoveredIndex === index ? '#FF4D00' : textSecondary,
                                            opacity: hoveredIndex === index ? 1 : 0.4,
                                            transform: hoveredIndex === index ? 'translate(2px, -2px)' : 'none',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Mobile row */}
                            <div className="md:hidden flex flex-col gap-3 py-6 px-4">
                                <div className="flex items-center justify-between">
                                    <span
                                        className="font-sans font-normal text-[12px] tabular-nums"
                                        style={{ color: textSecondary }}
                                    >
                                        {project.year}
                                    </span>
                                    <span
                                        className="font-sans font-normal text-[12px]"
                                        style={{ color: textSecondary }}
                                    >
                                        {project.industry}
                                    </span>
                                </div>
                                <span
                                    className="font-sans font-semibold text-[20px] leading-tight"
                                    style={{ color: textPrimary }}
                                >
                                    {project.title}
                                </span>
                                <p
                                    className="font-sans font-normal text-[14px] leading-[1.6]"
                                    style={{ color: textSecondary }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="font-sans font-medium text-[11px] tracking-[0.08em] uppercase px-2.5 py-1"
                                            style={{
                                                border: `1px solid ${borderColor}`,
                                                color: textSecondary,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
