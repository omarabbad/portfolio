import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
    isDark: boolean;
    onToggle: () => void;
}

export function Navbar({ isDark, onToggle }: NavbarProps) {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-colors duration-300 ${isDark ? 'border-white/10 bg-[#0D0D0D]/80' : 'border-border bg-background/80'}`}>
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className={`flex font-mono font-bold text-lg tracking-tight ${isDark ? 'text-[#E8E8E5]' : 'text-text-primary'}`}>
                        OMAR ABBAD
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {['about', 'projects', 'features', 'contact'].map((id) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`text-sm font-mono capitalize transition-colors ${isDark ? 'text-white/50 hover:text-white' : 'text-text-muted hover:text-text-primary'}`}
                            >
                                {id === 'features' ? 'Skills' : id.charAt(0).toUpperCase() + id.slice(1)}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onToggle}
                            aria-label="Toggle dark mode"
                            className={`flex items-center justify-center w-9 h-9 border rounded transition-colors duration-200 ${isDark ? 'border-white/20 text-white/70 hover:text-white hover:border-white/40' : 'border-border text-text-muted hover:text-text-primary hover:border-text-muted'}`}
                        >
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => scrollTo('contact')}
                            className={`hidden md:inline-flex ${isDark ? 'border-white/20 text-[#E8E8E5] hover:bg-white/5' : ''}`}
                        >
                            Let's Talk
                        </Button>
                        <Button size="sm" onClick={() => scrollTo('projects')}>
                            View Work
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
