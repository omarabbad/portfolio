import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor({ isDark }: { isDark: boolean }) {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            setIsPointer(target.closest('a, button, [role="button"]') !== null);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => { window.removeEventListener('mousemove', updateMousePosition); };
    }, []);

    // Layout:
    // Square size = 4px, gap between bottom two = 4px
    // Container  = 12px wide x 8px tall
    // Top square sits in the middle column (x: 4..8), touching the inner top corners of both bottom squares
    const color = isDark ? '#E8E8E5' : '#111111';
    const S = 4; // square size in px
    const G = 4; // gap between bottom squares in px
    const W = S + G + S; // 12
    const H = S + S;     // 8

    const sq = (style: React.CSSProperties) => (
        <div style={{ position: 'absolute', width: S, height: S, background: color, ...style }} />
    );

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100]"
            animate={{
                x: mousePosition.x - W / 2,
                y: mousePosition.y - H / 2,
                scale: isPointer ? 1.4 : 1,
                rotate: isPointer ? 180 : 0,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.12 }}
            style={{ width: W, height: H, position: 'fixed' }}
        >
            {/* Top square — centered horizontally, corners touching inner corners of bottom row */}
            {sq({ top: 0, left: S })}
            {/* Bottom-left square */}
            {sq({ bottom: 0, left: 0 })}
            {/* Bottom-right square */}
            {sq({ bottom: 0, right: 0 })}
        </motion.div>
    );
}
