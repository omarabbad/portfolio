import React from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

interface FooterProps {
    isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
    return (
        <footer className={`border-t py-12 transition-colors duration-300 ${isDark ? 'border-white/10 bg-[#0D0D0D]' : 'border-border'}`}>
            <Container className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Typography variant="label" className={isDark ? 'text-white/30' : ''}>
                    © {new Date().getFullYear()} OMAR ABBAD. ALL RIGHTS RESERVED.
                </Typography>
                <div className="flex gap-4">
                    <Typography variant="label" as="a" href="https://github.com/omarabbad" target="_blank" rel="noopener noreferrer" className={`cursor-pointer transition-colors ${isDark ? 'text-white/30 hover:text-white/70' : 'hover:text-text-primary'}`}>
                        GITHUB
                    </Typography>
                    <Typography variant="label" as="a" href="https://www.linkedin.com/in/omar-abbad-327427321/" target="_blank" rel="noopener noreferrer" className={`cursor-pointer transition-colors ${isDark ? 'text-white/30 hover:text-white/70' : 'hover:text-text-primary'}`}>
                        LINKEDIN
                    </Typography>
                </div>
            </Container>
        </footer>
    );
}
