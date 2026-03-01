import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<"div">, "className"> {
    className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    'border border-border bg-background p-6 rounded transition-colors hover:bg-white',
                    className
                )}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = 'Card';
