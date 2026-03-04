import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center whitespace-nowrap',
        'font-sans font-medium text-[14px] tracking-[0.05em] uppercase',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D00]',
        'disabled:pointer-events-none disabled:opacity-40',
    ].join(' '),
    {
        variants: {
            variant: {
                // Primary — solid accent fill
                default: 'bg-[#FF4D00] text-white hover:bg-[#E64400]',
                // Outline — thin border, transparent bg
                outline: 'border border-current bg-transparent',
                // Ghost — no border
                ghost: 'bg-transparent',
                // Text link style
                link: 'bg-transparent underline-offset-4 hover:underline p-0 h-auto',
            },
            size: {
                default: 'h-12 px-8 py-3',
                sm: 'h-9 px-5 text-[12px]',
                lg: 'h-14 px-10 text-[15px]',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<'button'>, 'className'>,
        VariantProps<typeof buttonVariants> {
    className?: string;
    isDark?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isDark = true, style, ...props }, ref) => {
        const isOutline = variant === 'outline';
        const isGhost = variant === 'ghost';

        const outlineColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
        const outlineTextColor = isDark ? '#FFFFFF' : '#111111';
        const ghostTextColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

        const dynamicStyle: React.CSSProperties = isOutline
            ? { borderColor: outlineColor, color: outlineTextColor }
            : isGhost
            ? { color: ghostTextColor }
            : {};

        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{ ...dynamicStyle, ...style }}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
