import { motion } from 'framer-motion';

interface HeroProps {
    isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
    const textPrimary   = isDark ? '#F5F5F5' : '#000000';
    const textSecondary = isDark ? '#B8B8B8' : '#555555';
    const borderColor   = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                background: isDark ? '#000000' : '#FFFFFF',
                paddingTop: 160,
                paddingBottom: 160,
            }}
        >
            {/* Subtle radial glow — dark mode only */}
            {isDark && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,43,255,0.08) 0%, transparent 70%)',
                    }}
                />
            )}

            <div className="coda-container relative z-10">
                <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <span
                            className="inline-flex items-center gap-2 font-sans font-medium rounded-full px-4 py-1.5"
                            style={{
                                fontSize: 12,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: textSecondary,
                                border: `1px solid ${borderColor}`,
                                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: '#0E2BFF' }}
                            />
                            Ready to Grow?
                        </span>
                    </motion.div>

                    {/* Stacked headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col items-center"
                    >
                        {['CUSTOMIZE', 'MONETIZE', 'MAXIMIZE'].map((word, i) => (
                            <span
                                key={word}
                                className="hero-headline block"
                                style={{
                                    color: textPrimary,
                                    opacity: 1 - i * 0.08,
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="font-sans font-normal max-w-xl"
                        style={{
                            fontSize: 18,
                            lineHeight: 1.6,
                            color: textSecondary,
                        }}
                    >
                        Accelerate growth with intelligent AI systems, scalable data pipelines,
                        and enterprise-grade software solutions.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {/* Primary pill CTA */}
                        <button
                            onClick={() => scrollTo('projects')}
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
                            View Projects
                        </button>

                        {/* Secondary outline CTA */}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="inline-flex items-center font-sans font-semibold rounded-full transition-all duration-300"
                            style={{
                                height: 48,
                                paddingLeft: 24,
                                paddingRight: 24,
                                fontSize: 15,
                                background: 'transparent',
                                color: textSecondary,
                                border: `1px solid ${borderColor}`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = textPrimary;
                                (e.currentTarget as HTMLElement).style.borderColor = isDark
                                    ? 'rgba(255,255,255,0.3)'
                                    : 'rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = textSecondary;
                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                            }}
                        >
                            Get in Touch
                        </button>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-wrap items-center justify-center gap-8 pt-4"
                        style={{
                            borderTop: `1px solid ${borderColor}`,
                            paddingTop: 32,
                            width: '100%',
                        }}
                    >
                        {[
                            { value: '5+',  label: 'Projects Delivered' },
                            { value: '6+',  label: 'Languages Mastered' },
                            { value: '4',   label: 'Technical Domains'  },
                            { value: '100%', label: 'Commitment'        },
                        ].map(({ value, label }) => (
                            <div key={label} className="flex flex-col items-center gap-1">
                                <span
                                    className="font-sans font-black"
                                    style={{ fontSize: 28, letterSpacing: '-0.02em', color: textPrimary }}
                                >
                                    {value}
                                </span>
                                <span
                                    className="font-sans font-normal"
                                    style={{ fontSize: 13, color: textSecondary }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
