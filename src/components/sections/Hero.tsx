import { motion } from 'framer-motion';

interface HeroProps {
    isDark: boolean;
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export function Hero({ isDark }: HeroProps) {
    const textPrimary  = isDark ? '#FFFFFF' : '#111111';
    const textSecondary = isDark ? '#9A9A9A' : '#6B6B6B';
    const borderColor  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex flex-col"
            style={{ paddingTop: '64px' }} // navbar height offset
        >
            {/* ── Main grid split ─────────────────────────────────── */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT — Typography block */}
                <div
                    className="flex flex-col justify-end px-6 md:px-12 pb-16 pt-20 lg:pt-32"
                    style={{ borderRight: `1px solid ${borderColor}` }}
                >
                    {/* Label */}
                    <motion.div {...fadeUp(0.1)} className="mb-8">
                        <span
                            className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                            style={{ color: '#FF4D00' }}
                        >
                            Portfolio — 2025
                        </span>
                    </motion.div>

                    {/* Hero heading — stacked */}
                    <motion.div {...fadeUp(0.2)} className="mb-8">
                        <h1
                            className="font-sans font-black leading-[0.9] tracking-[-0.02em]"
                            style={{
                                fontSize: 'clamp(72px, 9vw, 150px)',
                                color: textPrimary,
                            }}
                        >
                            Artificial
                            <br />
                            <span style={{ color: '#FF4D00' }}>Intelligence</span>
                            <br />
                            Developer
                        </h1>
                    </motion.div>

                    {/* Body text */}
                    <motion.div {...fadeUp(0.35)} className="mb-10 max-w-md">
                        <p
                            className="font-sans font-normal text-[18px] leading-[1.7]"
                            style={{ color: textSecondary }}
                        >
                            Building intelligent, scalable systems and data pipelines.
                            Transforming complex data into robust enterprise solutions.
                        </p>
                    </motion.div>

                    {/* CTA row */}
                    <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="font-sans font-medium text-[13px] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300 hover:opacity-80"
                            style={{ background: '#FF4D00', color: '#FFFFFF' }}
                        >
                            View Work
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="font-sans font-medium text-[13px] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300 hover:opacity-80"
                            style={{
                                border: `1px solid ${borderColor}`,
                                color: textPrimary,
                                background: 'transparent',
                            }}
                        >
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Bottom meta row */}
                    <motion.div
                        {...fadeUp(0.55)}
                        className="flex items-center gap-8 mt-16 pt-8"
                        style={{ borderTop: `1px solid ${borderColor}` }}
                    >
                        {[
                            { value: '5+',  label: 'Projects' },
                            { value: '4+',  label: 'Languages' },
                            { value: '2025', label: 'Available' },
                        ].map(({ value, label }) => (
                            <div key={label} className="flex flex-col gap-1">
                                <span
                                    className="font-sans font-bold text-[28px] leading-none tracking-[-0.02em]"
                                    style={{ color: textPrimary }}
                                >
                                    {value}
                                </span>
                                <span
                                    className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                                    style={{ color: textSecondary }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — Cinematic image block */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    className="relative hidden lg:flex flex-col overflow-hidden"
                    style={{ minHeight: '100%' }}
                >
                    {/* Placeholder cinematic gradient image */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: isDark
                                ? 'linear-gradient(135deg, #0A0A0A 0%, #141414 30%, #1A1A1A 60%, #0F0F0F 100%)'
                                : 'linear-gradient(135deg, #E8E8E8 0%, #F0F0F0 30%, #E0E0E0 60%, #EBEBEB 100%)',
                        }}
                    />

                    {/* Cinematic overlay layers */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: isDark
                                ? 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,77,0,0.08) 0%, transparent 60%)'
                                : 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,77,0,0.06) 0%, transparent 60%)',
                        }}
                    />

                    {/* Large decorative number */}
                    <div
                        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                        style={{ opacity: isDark ? 0.04 : 0.05 }}
                    >
                        <span
                            className="font-sans font-black"
                            style={{
                                fontSize: 'clamp(200px, 30vw, 400px)',
                                lineHeight: 1,
                                color: isDark ? '#FFFFFF' : '#000000',
                                letterSpacing: '-0.05em',
                            }}
                        >
                            AI
                        </span>
                    </div>

                    {/* Vertical text label */}
                    <div
                        className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
                        style={{ opacity: 0.35 }}
                    >
                        <div
                            className="w-px h-16"
                            style={{ background: isDark ? '#FFFFFF' : '#111111' }}
                        />
                        <span
                            className="font-sans font-medium text-[10px] tracking-[0.3em] uppercase"
                            style={{
                                color: isDark ? '#FFFFFF' : '#111111',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                            }}
                        >
                            AI · ML · Data · Systems
                        </span>
                        <div
                            className="w-px h-16"
                            style={{ background: isDark ? '#FFFFFF' : '#111111' }}
                        />
                    </div>

                    {/* Bottom caption */}
                    <div
                        className="absolute bottom-8 left-8 right-8 flex items-end justify-between"
                    >
                        <span
                            className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                            style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}
                        >
                            Omar Abbad
                        </span>
                        <span
                            className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                            style={{ color: '#FF4D00' }}
                        >
                            2025
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
