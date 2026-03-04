import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import type { JSX } from 'react';

interface ContactProps {
    isDark: boolean;
}

const contactLinks = [
    {
        icon: Mail,
        label: 'Email',
        value: 'omar.abbad@email.com',
        href: 'mailto:omar.abbad@email.com',
        color: '#0E2BFF',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'omar-abbad',
        href: 'https://www.linkedin.com/in/omar-abbad-327427321/',
        color: '#0B7C47',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'omarabbad',
        href: 'https://github.com/omarabbad',
        color: '#5C2BFF',
    },
];

export function Contact({ isDark }: ContactProps): JSX.Element {
    const bg          = isDark ? '#000000' : '#FFFFFF';
    const textPrimary = isDark ? '#F5F5F5' : '#000000';
    const textMuted   = isDark ? '#B8B8B8' : '#555555';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const cardBg      = isDark ? '#0D0D0D' : '#F8F8F8';

    return (
        <section
            id="contact"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="coda-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* ── Left: CTA copy ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="label-text" style={{ color: textMuted }}>
                                Contact
                            </span>
                            <h2 className="display-heading" style={{ color: textPrimary }}>
                                Let's Build<br />Something Great
                            </h2>
                        </div>

                        <p
                            className="font-sans font-normal"
                            style={{ fontSize: 17, lineHeight: 1.7, color: textMuted }}
                        >
                            Have a project in mind? Looking for an AI developer to join your team?
                            I'm open to freelance projects, full-time roles, and technical collaborations.
                        </p>

                        <p
                            className="font-sans font-normal"
                            style={{ fontSize: 17, lineHeight: 1.7, color: textMuted }}
                        >
                            Whether it's building a machine learning pipeline, architecting a
                            scalable web platform, or solving a complex data problem — let's talk.
                        </p>

                        {/* Primary CTA */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href="mailto:omar.abbad@email.com"
                                className="inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                style={{
                                    height: 48,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    fontSize: 15,
                                    background: isDark ? '#F5F5F5' : '#000000',
                                    color:      isDark ? '#000000' : '#FFFFFF',
                                    textDecoration: 'none',
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
                                Send an Email
                                <ArrowUpRight size={16} strokeWidth={2} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/omar-abbad-327427321/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                style={{
                                    height: 48,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    fontSize: 15,
                                    background: 'transparent',
                                    color: textMuted,
                                    border: `1px solid ${borderColor}`,
                                    textDecoration: 'none',
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
                                Connect on LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* ── Right: Contact cards ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-4"
                    >
                        {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center gap-5 p-6 rounded-[20px] transition-all duration-300"
                                style={{
                                    background: cardBg,
                                    border: `1px solid ${borderColor}`,
                                    textDecoration: 'none',
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
                                {/* Icon badge */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: color }}
                                >
                                    <Icon size={20} strokeWidth={2} color="white" />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                    <span
                                        className="font-sans font-semibold"
                                        style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: textMuted }}
                                    >
                                        {label}
                                    </span>
                                    <span
                                        className="font-sans font-medium truncate"
                                        style={{ fontSize: 16, color: textPrimary }}
                                    >
                                        {value}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2}
                                    style={{ color: textMuted, flexShrink: 0, transition: 'transform 0.2s ease' }}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        ))}

                        {/* Availability badge */}
                        <div
                            className="flex items-center gap-3 p-5 rounded-[20px] mt-2"
                            style={{
                                background: isDark ? 'rgba(11,124,71,0.12)' : 'rgba(11,124,71,0.08)',
                                border: `1px solid rgba(11,124,71,0.25)`,
                            }}
                        >
                            <div
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{
                                    background: '#0B7C47',
                                    boxShadow: '0 0 8px rgba(11,124,71,0.6)',
                                }}
                            />
                            <span
                                className="font-sans font-medium"
                                style={{ fontSize: 14, color: isDark ? 'rgba(123,227,178,0.9)' : '#0B7C47' }}
                            >
                                Available for new projects and opportunities
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
