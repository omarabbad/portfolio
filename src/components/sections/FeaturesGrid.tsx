import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Network, Globe, Layers } from 'lucide-react';
import type { JSX } from 'react';

interface FeaturesGridProps {
    isDark: boolean;
}

const features = [
    {
        icon: Code2,
        title: 'Programming Languages',
        description: 'Python, Java, R, JavaScript, TypeScript, SQL — full-spectrum language capability for any engineering challenge.',
        tags: ['Python', 'Java', 'TypeScript', 'SQL'],
    },
    {
        icon: Cpu,
        title: 'AI & Machine Learning',
        description: 'Predictive modeling, data analysis, and intelligent system design using modern ML frameworks and techniques.',
        tags: ['Machine Learning', 'Predictive Modeling', 'Data Analysis'],
    },
    {
        icon: Database,
        title: 'Data Engineering',
        description: 'Scalable data pipelines, optimized database schemas, and high-performance SQL for enterprise workloads.',
        tags: ['Data Pipelines', 'MySQL', 'SQLite', 'MongoDB'],
    },
    {
        icon: Network,
        title: 'Network & Linux',
        description: 'System administration, network protocol configuration, and server hardening on Linux infrastructure.',
        tags: ['Linux', 'Networking', 'Security'],
    },
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Modern full-stack web applications with React, Node.js, and Tailwind CSS for production-grade interfaces.',
        tags: ['React', 'Node.js', 'Next.js', 'Tailwind'],
    },
    {
        icon: Layers,
        title: 'System Architecture',
        description: 'Object-oriented design, scalable system architecture, and enterprise software patterns for complex domains.',
        tags: ['OOP', 'Architecture', 'Design Patterns'],
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
            id="features"
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
                        Expertise
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="display-heading" style={{ color: textPrimary }}>
                            Technical<br />Competencies
                        </h2>
                        <p
                            className="font-sans font-normal max-w-sm"
                            style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                        >
                            A comprehensive skill set spanning AI, data engineering,
                            full-stack development, and infrastructure.
                        </p>
                    </div>
                </motion.div>

                {/* 3-col feature grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={{
                                    hidden:  { opacity: 0, y: 32 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
                                }}
                                className="group flex flex-col gap-5 p-7 rounded-[28px] transition-all duration-300"
                                style={{
                                    background: cardBg,
                                    border: `1px solid ${borderColor}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                    (e.currentTarget as HTMLElement).style.borderColor = isDark
                                        ? 'rgba(255,255,255,0.15)'
                                        : 'rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                        color: textPrimary,
                                    }}
                                >
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-2">
                                    <h3
                                        className="font-sans font-bold"
                                        style={{ fontSize: 18, letterSpacing: '-0.01em', color: textPrimary }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="font-sans font-normal"
                                        style={{ fontSize: 14, lineHeight: 1.65, color: textMuted }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {feature.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-sans font-medium rounded-full px-3 py-1"
                                            style={{
                                                fontSize: 12,
                                                background: tagBg,
                                                color: tagColor,
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
