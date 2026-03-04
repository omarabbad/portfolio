import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { JSX } from 'react';

interface AboutProps {
    isDark: boolean;
}

const highlights = [
    'AI-powered systems that scale with your business',
    'End-to-end data pipelines from ingestion to insight',
    'Enterprise-grade software architecture and design',
    'Full-stack web applications with modern tooling',
    'Network infrastructure and Linux administration',
    'Machine learning models for predictive analytics',
];

const skills = [
    { category: 'Languages',   items: ['Python', 'Java', 'TypeScript', 'R', 'SQL'] },
    { category: 'Frameworks',  items: ['React', 'Node.js', 'Next.js', 'Tailwind CSS'] },
    { category: 'Data & AI',   items: ['Machine Learning', 'Data Pipelines', 'MongoDB', 'MySQL'] },
    { category: 'Systems',     items: ['Linux', 'Networking', 'Git', 'Docker'] },
];

export function About({ isDark }: AboutProps): JSX.Element {
    // Light section — inverted from global bg
    const bg          = isDark ? '#111111' : '#F4F2E9';
    const textPrimary = isDark ? '#F5F5F5' : '#000000';
    const textMuted   = isDark ? '#B8B8B8' : '#555555';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const tagBg       = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
    const tagColor    = isDark ? 'rgba(245,245,245,0.7)' : 'rgba(0,0,0,0.65)';
    const checkColor  = isDark ? '#6B9FFF' : '#0E2BFF';

    return (
        <section
            id="about"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="coda-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* ── Left: Media block ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        {/* Avatar / initials block */}
                        <div
                            className="relative w-full rounded-[28px] overflow-hidden flex items-center justify-center"
                            style={{
                                aspectRatio: '4/3',
                                background: isDark
                                    ? 'linear-gradient(135deg, #0E2BFF 0%, #5C2BFF 100%)'
                                    : 'linear-gradient(135deg, #0E2BFF 0%, #5C2BFF 100%)',
                            }}
                        >
                            {/* 3D blob decoration */}
                            <div
                                className="absolute"
                                style={{
                                    width: 300,
                                    height: 300,
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)',
                                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                                    top: '-20%',
                                    right: '-10%',
                                    filter: 'blur(30px)',
                                }}
                            />
                            <div
                                className="absolute"
                                style={{
                                    width: 200,
                                    height: 200,
                                    background: 'radial-gradient(circle, rgba(92,43,255,0.6), transparent 70%)',
                                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                    bottom: '-10%',
                                    left: '-5%',
                                    filter: 'blur(25px)',
                                }}
                            />

                            {/* Initials */}
                            <span
                                className="relative z-10 font-sans font-black text-white select-none"
                                style={{ fontSize: 'clamp(64px, 10vw, 96px)', letterSpacing: '-0.04em' }}
                            >
                                OA
                            </span>
                        </div>

                        {/* Skill tags grid */}
                        <div className="flex flex-col gap-5">
                            {skills.map(({ category, items }) => (
                                <div key={category} className="flex flex-col gap-2">
                                    <span
                                        className="label-text"
                                        style={{ color: textMuted }}
                                    >
                                        {category}
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="font-sans font-medium rounded-full px-3 py-1"
                                                style={{
                                                    fontSize: 13,
                                                    background: tagBg,
                                                    color: tagColor,
                                                    border: `1px solid ${borderColor}`,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Editorial text ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="label-text" style={{ color: textMuted }}>
                                About
                            </span>
                            <h2 className="display-heading" style={{ color: textPrimary }}>
                                Building Intelligent<br />Systems
                            </h2>
                        </div>

                        <p
                            className="font-sans font-normal"
                            style={{ fontSize: 17, lineHeight: 1.7, color: textMuted }}
                        >
                            I'm Omar Abbad, an AI Developer and software engineer with a passion
                            for building intelligent, scalable systems. I specialize in bridging
                            the gap between data science and production engineering — turning
                            complex problems into elegant, high-performance solutions.
                        </p>

                        <p
                            className="font-sans font-normal"
                            style={{ fontSize: 17, lineHeight: 1.7, color: textMuted }}
                        >
                            From machine learning pipelines to enterprise web applications,
                            I bring a full-stack perspective to every project — combining
                            deep technical expertise with a focus on clean architecture
                            and measurable outcomes.
                        </p>

                        {/* Highlights checklist */}
                        <div className="flex flex-col gap-3 pt-2">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={18}
                                        strokeWidth={2}
                                        style={{ color: checkColor, flexShrink: 0, marginTop: 2 }}
                                    />
                                    <span
                                        className="font-sans font-normal"
                                        style={{ fontSize: 15, lineHeight: 1.5, color: textMuted }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-4 pt-2">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center font-sans font-semibold rounded-full transition-all duration-300"
                                style={{
                                    height: 48,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    fontSize: 15,
                                    background: isDark ? '#F5F5F5' : '#000000',
                                    color:      isDark ? '#000000' : '#FFFFFF',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                                    (e.currentTarget as HTMLElement).style.opacity = '0.9';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                    (e.currentTarget as HTMLElement).style.opacity = '1';
                                }}
                            >
                                Get in Touch
                            </button>
                            <a
                                href="https://github.com/omarabbad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-sans font-semibold rounded-full transition-all duration-300"
                                style={{
                                    height: 48,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    fontSize: 15,
                                    background: 'transparent',
                                    color: textMuted,
                                    border: `1px solid ${borderColor}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textPrimary;
                                    (e.currentTarget as HTMLElement).style.borderColor = isDark
                                        ? 'rgba(255,255,255,0.25)'
                                        : 'rgba(0,0,0,0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textMuted;
                                    (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                }}
                            >
                                View GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
