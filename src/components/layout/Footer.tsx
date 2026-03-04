interface FooterProps {
    isDark: boolean;
}

const footerLinks = {
    Products:  ['Payment Processing', 'Merchant of Record', 'Subscriptions', 'Analytics'],
    Solutions: ['E-Commerce', 'SaaS Platforms', 'Marketplaces', 'Enterprise'],
    Company:   ['About', 'Careers', 'Blog', 'Contact'],
};

export function Footer({ isDark }: FooterProps) {
    const bg          = isDark ? '#000000' : '#F4F2E9';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const textPrimary = isDark ? '#F5F5F5' : '#000000';
    const textMuted   = isDark ? '#B8B8B8' : '#555555';

    return (
        <footer
            style={{
                background: bg,
                borderTop: `1px solid ${borderColor}`,
            }}
        >
            <div className="coda-container py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand column */}
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2.5">
                            <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                            >
                                <span
                                    className="font-sans font-black text-[11px] leading-none"
                                    style={{ color: isDark ? '#000000' : '#FFFFFF' }}
                                >
                                    OA
                                </span>
                            </div>
                            <span
                                className="font-sans font-bold text-[15px] tracking-[-0.01em]"
                                style={{ color: textPrimary }}
                            >
                                Omar Abbad
                            </span>
                        </div>
                        <p
                            className="font-sans font-normal text-[14px] leading-relaxed max-w-[200px]"
                            style={{ color: textMuted }}
                        >
                            AI Developer building intelligent, scalable systems and data pipelines.
                        </p>
                        <div className="flex items-center gap-3">
                            {['GitHub', 'LinkedIn'].map((platform) => (
                                <a
                                    key={platform}
                                    href={
                                        platform === 'GitHub'
                                            ? 'https://github.com/omarabbad'
                                            : 'https://www.linkedin.com/in/omar-abbad-327427321/'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase transition-colors duration-200"
                                    style={{ color: textMuted }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textPrimary;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textMuted;
                                    }}
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="flex flex-col gap-4">
                            <span
                                className="font-sans font-semibold text-[12px] tracking-[0.12em] uppercase"
                                style={{ color: textPrimary }}
                            >
                                {category}
                            </span>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <span
                                            className="font-sans font-normal text-[14px] transition-colors duration-200 cursor-pointer"
                                            style={{ color: textMuted }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.color = textPrimary;
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.color = textMuted;
                                            }}
                                        >
                                            {link}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
                    style={{ borderTop: `1px solid ${borderColor}` }}
                >
                    <span
                        className="font-sans font-normal text-[13px]"
                        style={{ color: textMuted }}
                    >
                        © {new Date().getFullYear()} Omar Abbad. All rights reserved.
                    </span>
                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                            <span
                                key={item}
                                className="font-sans font-normal text-[13px] cursor-pointer transition-colors duration-200"
                                style={{ color: textMuted }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textPrimary;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textMuted;
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
