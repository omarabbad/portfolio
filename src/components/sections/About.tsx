import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
    isDark: boolean;
}

const skills = [
    { category: 'Languages',        items: ['Python', 'Java', 'R', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Frameworks',       items: ['React', 'Node.js', 'Express', 'Tailwind', 'Next.js'] },
    { category: 'Database & Tools', items: ['MySQL', 'SQLite', 'MongoDB', 'Git', 'Linux'] },
    { category: 'Concepts',         items: ['Machine Learning', 'Data Analysis', 'OOP', 'Networking'] },
];

export function About({ isDark }: AboutProps) {
    const textPrimary   = isDark ? '#FFFFFF' : '#111111';
    const textSecondary = isDark ? '#9A9A9A' : '#6B6B6B';
    const borderColor   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const surfaceBg     = isDark ? '#111111' : '#FFFFFF';

    return (
        <section id="about" className="w-full py-24 md:py-32">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 pb-6 flex items-end justify-between"
                    style={{ borderBottom: `1px solid ${borderColor}` }}
                >
                    <div className="flex flex-col gap-3">
                        <span
                            className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                            style={{ color: '#FF4D00' }}
                        >
                            Background
                        </span>
                        <h2
                            className="font-sans font-extrabold leading-[1.0] tracking-[-0.02em]"
                            style={{
                                fontSize: 'clamp(48px, 6vw, 96px)',
                                color: textPrimary,
                            }}
                        >
                            About Me
                        </h2>
                    </div>
                </motion.div>

                {/* Asymmetric grid: left media block, right editorial text */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

                    {/* LEFT — Media block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 lg:pr-16 lg:border-r flex flex-col gap-8"
                        style={{ borderColor }}
                    >
                        {/* Cinematic media placeholder */}
                        <div
                            className="relative w-full overflow-hidden"
                            style={{
                                aspectRatio: '4/5',
                                background: isDark
                                    ? 'linear-gradient(160deg, #141414 0%, #1A1A1A 50%, #0F0F0F 100%)'
                                    : 'linear-gradient(160deg, #E8E8E8 0%, #F0F0F0 50%, #E0E0E0 100%)',
                                border: `1px solid ${borderColor}`,
                            }}
                        >
                            {/* Subtle accent glow */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(255,77,0,0.07) 0%, transparent 70%)',
                                }}
                            />

                            {/* Large initials */}
                            <div
                                className="absolute inset-0 flex items-center justify-center select-none"
                                style={{ opacity: isDark ? 0.06 : 0.07 }}
                            >
                                <span
                                    className="font-sans font-black"
                                    style={{
                                        fontSize: 'clamp(120px, 18vw, 220px)',
                                        lineHeight: 1,
                                        color: isDark ? '#FFFFFF' : '#000000',
                                        letterSpacing: '-0.05em',
                                    }}
                                >
                                    OA
                                </span>
                            </div>

                            {/* Bottom caption bar */}
                            <div
                                className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between"
                                style={{
                                    background: isDark
                                        ? 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)'
                                        : 'linear-gradient(to top, rgba(245,245,245,0.9) 0%, transparent 100%)',
                                }}
                            >
                                <span
                                    className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                                    style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}
                                >
                                    Omar Abbad
                                </span>
                                <span
                                    className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                                    style={{ color: '#FF4D00' }}
                                >
                                    AI Dev
                                </span>
                            </div>
                        </div>

                        {/* Quick stats below image */}
                        <div
                            className="grid grid-cols-2 gap-px"
                            style={{ border: `1px solid ${borderColor}` }}
                        >
                            {[
                                { value: '5+',  label: 'Projects Completed' },
                                { value: '4+',  label: 'Languages Mastered' },
                                { value: '3+',  label: 'Years Learning'     },
                                { value: '∞',   label: 'Problems Solved'    },
                            ].map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-col gap-1 p-5"
                                    style={{
                                        background: surfaceBg,
                                        borderRight: `1px solid ${borderColor}`,
                                        borderBottom: `1px solid ${borderColor}`,
                                    }}
                                >
                                    <span
                                        className="font-sans font-bold text-[28px] leading-none tracking-[-0.02em]"
                                        style={{ color: textPrimary }}
                                    >
                                        {value}
                                    </span>
                                    <span
                                        className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
                                        style={{ color: textSecondary }}
                                    >
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Editorial text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="lg:col-span-7 lg:pl-16 flex flex-col gap-10"
                    >
                        {/* Bio paragraphs */}
                        <div className="flex flex-col gap-6">
                            <p
                                className="font-sans font-normal text-[18px] leading-[1.7]"
                                style={{ color: textSecondary }}
                            >
                                I am an Artificial Intelligence Developer with a passion for building
                                scalable, intelligent systems. My focus lies in bridging the gap between
                                complex data algorithms and robust enterprise architecture.
                            </p>
                            <p
                                className="font-sans font-normal text-[18px] leading-[1.7]"
                                style={{ color: textSecondary }}
                            >
                                With a strong foundation across multiple programming languages and frameworks,
                                I specialize in developing solutions that optimize operations — from predictive
                                modeling to comprehensive management systems and secure network infrastructures.
                            </p>

                            {/* Accent divider */}
                            <div className="w-12 h-[2px]" style={{ background: '#FF4D00' }} />
                        </div>

                        {/* Skills grid */}
                        <div className="flex flex-col gap-6">
                            <span
                                className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                                style={{ color: textSecondary, opacity: 0.6 }}
                            >
                                Technical Skills
                            </span>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                                style={{ border: `1px solid ${borderColor}` }}
                            >
                                {skills.map((group, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.07 }}
                                        className="flex flex-col gap-4 p-6"
                                        style={{
                                            background: surfaceBg,
                                            borderRight: `1px solid ${borderColor}`,
                                            borderBottom: `1px solid ${borderColor}`,
                                        }}
                                    >
                                        <span
                                            className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                                            style={{ color: '#FF4D00', opacity: 0.8 }}
                                        >
                                            {group.category}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((item, i) => (
                                                <span
                                                    key={i}
                                                    className="font-sans font-normal text-[13px] px-2.5 py-1"
                                                    style={{
                                                        border: `1px solid ${borderColor}`,
                                                        color: textSecondary,
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
