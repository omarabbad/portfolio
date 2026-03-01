import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface ContactProps {
    isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
    return (
        <Section id="contact" className={`transition-colors duration-300 ${isDark ? 'bg-transparent' : ''}`}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto py-12 md:py-24"
                >
                    <div className="flex flex-col gap-4 items-center">
                        <Typography variant="label" className={isDark ? 'text-white/40' : ''}>Get in Touch</Typography>
                        <Typography variant="h2" className={isDark ? 'text-[#E8E8E5]' : ''}>Let's build something intelligent.</Typography>
                    </div>

                    <Typography variant="p" className={`mb-4 ${isDark ? 'text-white/50' : ''}`}>
                        Currently open for new opportunities. Whether you have a question or just want to
                        say hi, I'll try my best to get back to you!
                    </Typography>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                        <Button size="lg">
                            <a href="mailto:contact@omarabd.example.com">Send an Email</a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className={isDark ? 'border-white/20 text-[#E8E8E5] hover:bg-white/5' : ''}
                        >
                            <a href="https://www.linkedin.com/in/omar-abbad-327427321/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
