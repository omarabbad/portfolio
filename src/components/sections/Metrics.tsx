import { motion } from 'framer-motion';

interface MetricsProps {
    isDark: boolean;
}

const metrics = [
    { value: '5+',   label: 'Projects Delivered',   description: 'End-to-end systems built and deployed' },
    { value: '6+',   label: 'Languages',             description: 'Python, Java, R, SQL, TypeScript, JS' },
    { value: '4',    label: 'Core Domains',          description: 'AI, Data, Systems, Infrastructure' },
    { value: '100%', label: 'Commitment',             description: 'Every project built with full dedication' },
];

export function Metrics({ isDark }: MetricsProps) {
    const textPrimary   = isDark ? '#FFFFFF' : '#111111';
    const textSecondary = isDark ? '#9A9A9A' : '#6B6B6B';
    const borderColor   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const surfaceBg     = isDark ? '#111111' : '#FFFFFF';

    return (
        <section id="metrics" className="w-full py-0">
            <div className="mx-auto w-full max-w-[1440px]">

                {/* Full-width metrics strip */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-4"
                    style={{ borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}` }}
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                                delay: index * 0.08,
                            }}
                            className="flex flex-col gap-2 px-8 py-10"
                            style={{
                                background: surfaceBg,
                                borderRight: index < metrics.length - 1 ? `1px solid ${borderColor}` : 'none',
                            }}
                        >
                            {/* Large number */}
                            <span
                                className="font-sans font-black leading-none tracking-[-0.03em]"
                                style={{
                                    fontSize: 'clamp(40px, 5vw, 72px)',
                                    color: textPrimary,
                                }}
                            >
                                {metric.value}
                            </span>

                            {/* Label */}
                            <span
                                className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase"
                                style={{ color: '#FF4D00' }}
                            >
                                {metric.label}
                            </span>

                            {/* Description */}
                            <span
                                className="font-sans font-normal text-[13px] leading-[1.5]"
                                style={{ color: textSecondary }}
                            >
                                {metric.description}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
