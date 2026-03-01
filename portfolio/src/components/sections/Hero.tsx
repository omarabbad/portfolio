import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface HeroProps {
    isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
    return (
        <Section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden relative">
            {/* Decorative background element — purely visual, never affects text */}
            <div
                aria-hidden="true"
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[480px] flex items-center justify-center pointer-events-none select-none ${isDark ? 'opacity-[0.04]' : 'opacity-[0.06]'}`}
            >
                <span className="font-mono text-sm tracking-[0.5em] rotate-90 whitespace-nowrap">
                    AI // ML // DATA // SYSTEMS
                </span>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col gap-8 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-8"
                    >
                        <Typography variant="hero" className={isDark ? 'text-[#E8E8E5]' : ''}>
                            Artificial Intelligence<br />Developer
                        </Typography>
                        <Typography variant="p" className={`max-w-lg ${isDark ? 'text-white/50' : ''}`}>
                            Building intelligent, scalable systems and data pipelines. Focused on transforming complex data into robust enterprise solutions.
                        </Typography>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className={isDark ? 'border-white/20 text-[#E8E8E5] hover:bg-white/5' : ''}
                            >
                                Contact Me
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
