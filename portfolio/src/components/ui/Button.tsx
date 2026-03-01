import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-transparent rounded',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white hover:bg-primary-hover',
                outline: 'border-border bg-transparent hover:bg-background text-text-primary',
                ghost: 'hover:bg-background text-text-primary',
            },
            size: {
                default: 'h-12 px-6 py-2',
                sm: 'h-8 px-4 text-xs',
                lg: 'h-14 px-8',
                icon: 'h-12 w-12',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<"button">, "className">,
    VariantProps<typeof buttonVariants> {
    className?: string;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
