import { motion } from 'framer-motion';

interface MetricsProps {
    isDark: boolean;
}

const stats = [
    { value: '40C+',  label: 'Payment Channels',    sub: 'Integrated globally'       },
    { value: '99.9%', label: 'Uptime SLA',           sub: 'Enterprise reliability'    },
    { value: '5+',    label: 'Projects Delivered',   sub: 'End-to-end solutions'      },
    { value: '6+',    label: 'Languages Mastered',   sub: 'Full-stack capability'     },
];

export function Metrics({ isDark }: MetricsProps) {
    // Light section — inverted from global bg
    const bg          = isDark ? '#111111' : '#F4F2E9';
    const textPrimary = isDark ? '#F5F5F5' : '#000000';
    const textMuted   = isDark ? '#B8B8B8' : '#555555';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

    return (
        <section
            id="metrics"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="coda-container">

                {/* Large centered stat — hero number */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <span
                        className="stat-number"
                        style={{ color: textPrimary }}
                    >
                        40C+
                    </span>
                    <span
                        className="font-sans font-medium mt-3"
                        style={{ fontSize: 18, color: textMuted }}
                    >
                        Payment Channels
                    </span>
                    <p
                        className="font-sans font-normal mt-2 max-w-sm"
                        style={{ fontSize: 15, lineHeight: 1.6, color: textMuted, opacity: 0.7 }}
                    >
                        Connecting merchants to global payment infrastructure at scale.
                    </p>
                </motion.div>

                {/* 4-col stat grid */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={{
                                hidden:  { opacity: 0, y: 24 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
                            }}
                            className="flex flex-col gap-2 p-8"
                            style={{
                                borderLeft: i > 0 ? `1px solid ${borderColor}` : 'none',
                                borderTop: `1px solid ${borderColor}`,
                            }}
                        >
                            <span
                                className="font-sans font-black"
                                style={{ fontSize: 48, lineHeight: 1, letterSpacing: '-0.03em', color: textPrimary }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="font-sans font-semibold"
                                style={{ fontSize: 15, color: textPrimary }}
                            >
                                {stat.label}
                            </span>
                            <span
                                className="font-sans font-normal"
                                style={{ fontSize: 13, color: textMuted }}
                            >
                                {stat.sub}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
