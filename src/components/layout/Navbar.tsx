import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
    isDark: boolean;
    onToggle: () => void;
}

const navLinks = [
    { label: 'Work',    id: 'projects' },
    { label: 'Process', id: 'features' },
    { label: 'About',   id: 'about'    },
    { label: 'Contact', id: 'contact'  },
];

export function Navbar({ isDark, onToggle }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const bg = isDark ? '#0A0A0A' : '#F5F5F5';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const textPrimary = isDark ? '#FFFFFF' : '#111111';
    const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: scrolled
                        ? isDark ? 'rgba(10,10,10,0.92)' : 'rgba(245,245,245,0.92)'
                        : bg,
                    borderBottom: `1px solid ${scrolled ? borderColor : 'transparent'}`,
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                }}
            >
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-3 group"
                        >
                            {/* Accent dot */}
                            <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: '#FF4D00' }}
                            />
                            <span
                                className="font-sans font-bold text-[15px] tracking-[0.08em] uppercase"
                                style={{ color: textPrimary }}
                            >
                                Omar Abbad
                            </span>
                        </button>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(({ label, id }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className="font-sans font-medium text-[13px] tracking-[0.1em] uppercase transition-colors duration-200"
                                    style={{ color: textMuted }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textPrimary;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textMuted;
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            {/* Theme toggle */}
                            <button
                                onClick={onToggle}
                                aria-label="Toggle theme"
                                className="flex items-center justify-center w-8 h-8 transition-opacity duration-200 hover:opacity-60"
                                style={{ color: textMuted }}
                            >
                                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                            </button>

                            {/* CTA */}
                            <button
                                onClick={() => scrollTo('contact')}
                                className="hidden md:flex items-center gap-2 font-sans font-medium text-[13px] tracking-[0.1em] uppercase px-5 py-2.5 transition-all duration-200 hover:opacity-80"
                                style={{
                                    color: '#FF4D00',
                                    border: '1px solid #FF4D00',
                                }}
                            >
                                Let's Talk
                            </button>

                            {/* Mobile menu toggle */}
                            <button
                                onClick={() => setMobileOpen((v) => !v)}
                                className="md:hidden flex items-center justify-center w-8 h-8"
                                style={{ color: textPrimary }}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed top-16 left-0 right-0 z-40 flex flex-col"
                        style={{
                            background: isDark ? '#0A0A0A' : '#F5F5F5',
                            borderBottom: `1px solid ${borderColor}`,
                        }}
                    >
                        {navLinks.map(({ label, id }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className="px-6 py-4 text-left font-sans font-medium text-[13px] tracking-[0.1em] uppercase transition-colors duration-200"
                                style={{
                                    color: textMuted,
                                    borderBottom: `1px solid ${borderColor}`,
                                }}
                            >
                                {label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="mx-6 my-4 py-3 font-sans font-medium text-[13px] tracking-[0.1em] uppercase text-center"
                            style={{ color: '#FF4D00', border: '1px solid #FF4D00' }}
                        >
                            Let's Talk
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
