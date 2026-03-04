import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react';

interface ContactProps {
    isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
    const textPrimary   = isDark ? '#FFFFFF' : '#111111';
    const textSecondary = isDark ? '#9A9A9A' : '#6B6B6B';
    const borderColor   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

    const contactLinks = [
        {
            icon: Mail,
            label: 'Email',
            value: 'Send a message',
            href: 'mailto:contact@omarabd.example.com',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect with me',
            href: 'https://www.linkedin.com/in/omar-abbad-327427321/',
        },
    ];

    return (
        <section id="contact" className="w-full py-24 md:py-32">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 pb-6"
                    style={{ borderBottom: `1px solid ${borderColor}` }}
                >
                    <span
                        className="font-sans font-medium text-[12px] tracking-[0.2em] uppercase block mb-3"
                        style={{ color: '#FF4D00' }}
                    >
                        Get in Touch
                    </span>
                    <h2
                        className="font-sans font-extrabold leading-[1.0] tracking-[-0.02em]"
                        style={{
                            fontSize: 'clamp(48px, 6vw, 96px)',
                            color: textPrimary,
                        }}
                    >
                        Let's Build
                        <br />
                        Something.
                    </h2>
                </motion.div>

                {/* Asymmetric layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT — Large CTA text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 flex flex-col gap-8"
                    >
                        <p
                            className="font-sans font-normal text-[18px] leading-[1.7]"
                            style={{ color: textSecondary }}
                        >
                            Currently open for new opportunities. Whether you have a project in mind,
                            a question about my work, or just want to connect — I'd love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:contact@omarabd.example.com"
                                className="inline-flex items-center justify-center gap-2 font-sans font-medium text-[13px] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-200 hover:opacity-80"
                                style={{ background: '#FF4D00', color: '#FFFFFF' }}
                            >
                                Send an Email
                                <ArrowUpRight size={14} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/omar-abbad-327427321/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 font-sans font-medium text-[13px] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-200 hover:opacity-80"
                                style={{
                                    border: `1px solid ${borderColor}`,
                                    color: textPrimary,
                                    background: 'transparent',
                                }}
                            >
                                LinkedIn Profile
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT — Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="lg:col-span-6 flex flex-col gap-px"
                        style={{ border: `1px solid ${borderColor}` }}
                    >
                        {contactLinks.map(({ icon: Icon, label, value, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center justify-between p-8 transition-all duration-200"
                                style={{
                                    background: isDark ? '#111111' : '#FFFFFF',
                                    borderBottom: index < contactLinks.length - 1 ? `1px solid ${borderColor}` : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = isDark
                                        ? '#161616'
                                        : '#F8F8F8';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = isDark
                                        ? '#111111'
                                        : '#FFFFFF';
                                }}
                            >
                                <div className="flex items-center gap-5">
                                    <div
                                        className="flex items-center justify-center w-10 h-10"
                                        style={{ border: `1px solid ${borderColor}` }}
                                    >
                                        <Icon size={16} style={{ color: '#FF4D00' }} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span
                                            className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                                            style={{ color: textSecondary, opacity: 0.6 }}
                                        >
                                            {label}
                                        </span>
                                        <span
                                            className="font-sans font-semibold text-[16px]"
                                            style={{ color: textPrimary }}
                                        >
                                            {value}
                                        </span>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    style={{ color: textSecondary, opacity: 0.5 }}
                                />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
