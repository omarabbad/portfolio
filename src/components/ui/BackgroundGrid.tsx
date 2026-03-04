import React from 'react';

interface BackgroundGridProps {
    isDark: boolean;
}

export function BackgroundGrid({ isDark }: BackgroundGridProps) {
    const gridLineColor = isDark
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(0, 0, 0, 0.08)';

    // 12 vertical columns — evenly spaced
    const columns = Array.from({ length: 13 }, (_, i) => i); // 13 lines = 12 columns

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* 12-column vertical guide lines */}
            <div className="absolute inset-0 flex">
                {columns.map((i) => (
                    <div
                        key={i}
                        className="absolute top-0 bottom-0"
                        style={{
                            left: `${(i / 12) * 100}%`,
                            width: '1px',
                            background: gridLineColor,
                        }}
                    />
                ))}
            </div>

            {/* Subtle horizontal rhythm lines — every ~120px */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px)`,
                    backgroundSize: '100% 120px',
                    opacity: 0.5,
                }}
            />

            {/* Ambient glow — dark mode only */}
            {isDark && (
                <>
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            top: '-20%',
                            left: '20%',
                            width: '60%',
                            height: '50%',
                            background: 'radial-gradient(ellipse, rgba(255, 77, 0, 0.04) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                        }}
                    />
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '0%',
                            right: '10%',
                            width: '40%',
                            height: '40%',
                            background: 'radial-gradient(ellipse, rgba(255, 77, 0, 0.03) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                        }}
                    />
                </>
            )}
        </div>
    );
}
