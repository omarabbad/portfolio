import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'className' | 'style' | 'children'> {
    className?: string;
    isDark?: boolean;
    children?: React.ReactNode;
    /** Accent left border highlight */
    accent?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, isDark = true, accent = false, ...props }, ref) => {
        const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
        const bgColor = isDark ? '#111111' : '#FFFFFF';
        const accentBorder = accent ? `4px solid #FF4D00` : undefined;

        return (
            <motion.div
                ref={ref}
                className={cn('relative overflow-hidden', className)}
                style={{
                    background: bgColor,
                    border: `1px solid ${borderColor}`,
                    borderLeft: accentBorder ?? `1px solid ${borderColor}`,
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = 'Card';
