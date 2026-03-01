import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('text-text-primary', {
    variants: {
        variant: {
            hero: 'font-mono font-bold text-5xl md:text-7xl lg:text-[80px] leading-tight tracking-[-1px]',
            h1: 'font-mono font-bold text-4xl md:text-5xl tracking-[-0.5px]',
            h2: 'font-mono font-bold text-3xl md:text-4xl tracking-[-0.5px]',
            h3: 'font-mono font-bold text-2xl md:text-3xl',
            p: 'font-mono font-normal text-base md:text-lg text-text-muted leading-relaxed',
            label: 'font-mono text-xs uppercase tracking-wide text-text-muted font-medium',
        },
    },
    defaultVariants: {
        variant: 'p',
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>,
    VariantProps<typeof textVariants> {
    as?: React.ElementType;
}

export function Typography({ className, variant, as: Component = 'p', ...props }: TypographyProps) {
    return (
        <Component className={cn(textVariants({ variant, className }))} {...props} />
    );
}
