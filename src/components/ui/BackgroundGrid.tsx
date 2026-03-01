import React from 'react';

interface BackgroundGridProps {
    isDark: boolean;
}

export function BackgroundGrid({ isDark }: BackgroundGridProps) {
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

    // Grid size: 48px to match the original
    const gridStyle: React.CSSProperties = {
        backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Base Static Grid */}
            <div
                className="absolute inset-0 opacity-100"
                style={gridStyle}
            />

            {/* Distortion Grid Layer */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    ...gridStyle,
                    transform: 'scale(1.05)',
                    transformOrigin: 'var(--mouse-x) var(--mouse-y)',
                    maskImage: 'radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
                    transition: 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
            />
        </div>
    );
}
