import React from 'react';
import { motion } from 'framer-motion';

interface FeaturesGridProps {
    isDark: boolean;
}

const steps = [
    {
        number: '01',
        title: 'Discovery & Analysis',
        description:
            'Deep-dive into requirements, data sources, and system constraints. Define the problem space with precision before writing a single line of code.',
        tags: ['Requirements', 'Research', 'Architecture'],
    },
    {
        number: '02',
        title: 'Data Engineering',
        description:
            'Design and build robust data pipelines. Clean, transform, and structure raw data into reliable, queryable formats optimized for downstream use.',
        tags: ['ETL', 'SQL', 'Pipelines'],
    },
    {
        number: '03',
        title: 'Model Development',
        description:
            'Select, train, and validate machine learning models. Iterate on feature engineering and hyperparameter tuning to maximize predictive performance.',
        tags: ['ML', 'Python', 'R'],
    },
    {
        number: '04',
        title: 'System Integration',
        description:
            'Embed intelligence into production systems. Build APIs, GUIs, and backend services that make AI capabilities accessible and reliable at scale.',
        tags: ['APIs', 'Java', 'TypeScript'],
    },
    {
        number: '05',
        title: 'Deployment & Hardening',
        description:
            'Configure secure, performant infrastructure. Apply Linux administration, network security, and monitoring to ensure systems run reliably in production.',
        tags: ['Linux', 'Security', 'Networking'],
    },
];

export function FeaturesGrid({ isDark }: FeaturesGridProps) {
    const textPrimary   = isDark ? '#FFFFFF' : '#111111';
    const textSecondary = isDark ? '#9A9A9A' : '#6B6B6B';
    const borderColor   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

    return (
        <section id="features" className="w-full py-24 md:py-32">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">

                {/* Asymmetric layout: left heading + right steps */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

                    {/* LEFT — Large heading block */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 flex flex-col justify-between lg:pr-16 lg:border-r"
                        style={{ borderColor }}
                    >
                        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
                            <span
                                className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                                style={{ color: '#FF4D00' }}
                            >
                                How I Work
                            </span>
                            <h2
                                className="font-sans font-extrabold leading-[1.0] tracking-[-0.02em]"
                                style={{
                                    fontSize: 'clamp(48px, 5vw, 80px)',
                                    color: textPrimary,
                                }}
                            >
                                My
                                <br />
                                Process
                            </h2>
                            <p
                                className="font-sans font-normal text-[18px] leading-[1.7] max-w-xs"
                                style={{ color: textSecondary }}
                            >
                                A disciplined, end-to-end approach to building intelligent systems — from raw data to production-ready software.
                            </p>

                            {/* Accent line */}
                            <div
                                className="w-12 h-[2px]"
                                style={{ background: '#FF4D00' }}
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT — Numbered process steps */}
                    <div className="lg:col-span-8 lg:pl-16">
                        <div className="flex flex-col">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.16, 1, 0.3, 1],
                                        delay: index * 0.08,
                                    }}
                                    className="group relative flex gap-8 py-8"
                                    style={{ borderBottom: `1px solid ${borderColor}` }}
                                >
                                    {/* Step number */}
                                    <div className="flex-shrink-0 w-12">
                                        <span
                                            className="font-sans font-bold text-[13px] tracking-[0.1em] tabular-nums transition-colors duration-200"
                                            style={{
                                                color: '#FF4D00',
                                                opacity: 0.7,
                                            }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-3 flex-1">
                                        <h3
                                            className="font-sans font-semibold text-[22px] leading-tight tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#FF4D00]"
                                            style={{ color: textPrimary }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className="font-sans font-normal text-[16px] leading-[1.7]"
                                            style={{ color: textSecondary }}
                                        >
                                            {step.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {step.tags.map((tag, i) => (
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

                                    {/* Hover accent bar */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                        style={{ background: '#FF4D00' }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
