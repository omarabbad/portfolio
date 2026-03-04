interface FooterProps {
    isDark: boolean;
}

const links = [
    { label: 'GitHub',   href: 'https://github.com/omarabbad' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omar-abbad-327427321/' },
];

export function Footer({ isDark }: FooterProps) {
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    const textMuted = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)';
    const textHover = isDark ? '#FFFFFF' : '#111111';

    return (
        <footer
            className="w-full py-8 transition-colors duration-300"
            style={{
                background: isDark ? '#0A0A0A' : '#F5F5F5',
                borderTop: `1px solid ${borderColor}`,
            }}
        >
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Left — copyright */}
                    <div className="flex items-center gap-3">
                        <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: '#FF4D00' }}
                        />
                        <span
                            className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase"
                            style={{ color: textMuted }}
                        >
                            © {new Date().getFullYear()} Omar Abbad
                        </span>
                    </div>

                    {/* Center — tagline */}
                    <span
                        className="font-sans font-normal text-[11px] tracking-[0.15em] uppercase"
                        style={{ color: textMuted }}
                    >
                        AI Developer · Portfolio
                    </span>

                    {/* Right — links */}
                    <div className="flex items-center gap-6">
                        {links.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
                                style={{ color: textMuted }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textHover;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textMuted;
                                }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
