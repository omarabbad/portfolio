import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor({ isDark }: { isDark: boolean }) {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            setMousePosition({ x, y });

            // Update global CSS variables for the grid distortion
            document.documentElement.style.setProperty('--mouse-x', `${x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y}px`);

            const target = e.target as HTMLElement;
            setIsPointer(target.closest('a, button, [role="button"]') !== null);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => { window.removeEventListener('mousemove', updateMousePosition); };
    }, []);

    const color = isDark ? '#E8E8E5' : '#111111';
    const S = 4; // square size in px
    const G = 4; // gap between bottom squares in px
    const W = S + G + S; // 12
    const H = S + S;     // 8

    const sq = (style: React.CSSProperties) => (
        <div style={{ position: 'absolute', width: S, height: S, background: color, ...style }} />
    );

    return (
        <>
            {/* The Lens with Gradient Border */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99] rounded-full"
                animate={{
                    x: mousePosition.x - 40,
                    y: mousePosition.y - 40,
                    scale: isPointer ? 1.2 : 1,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0 }}
                style={{
                    width: 80,
                    height: 80,
                    border: '1px solid transparent',
                    background: `linear-gradient(${isDark ? '#050505' : '#F5F5F2'}, ${isDark ? '#050505' : '#F5F5F2'}) padding-box, 
                                 conic-gradient(from 0deg, #1F7A4F, #34D399, #1F7A4F) border-box`,
                    opacity: 0.15,
                }}
            />

            {/* The Pixelated Cursor */}
            <motion.div
                ref={cursorRef}
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
                {/* Top square */}
                {sq({ top: 0, left: S })}
                {/* Bottom-left square */}
                {sq({ bottom: 0, left: 0 })}
                {/* Bottom-right square */}
                {sq({ bottom: 0, right: 0 })}
            </motion.div>
        </>
    );
}
