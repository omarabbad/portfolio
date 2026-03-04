import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Metrics } from '@/components/sections/Metrics';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { CursorProvider, Cursor, CursorFollow } from '@/components/ui/cursor';
import { useTheme } from '@/lib/useTheme';

function App() {
    const { isDark, toggle } = useTheme();

    const bg = isDark ? '#0A0A0A' : '#F5F5F5';
    const textPrimary = isDark ? '#FFFFFF' : '#111111';

    return (
        <CursorProvider
            className="min-h-screen flex flex-col relative w-full overflow-x-hidden"
            style={{
                background: bg,
                color: textPrimary,
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
            {/* Custom cursor */}
            <Cursor>
                <div
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#FF4D00',
                    }}
                />
            </Cursor>
            <CursorFollow
                align="bottom-right"
                sideOffset={8}
                transition={{ stiffness: 300, damping: 30, bounce: 0 }}
            >
                <div
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                    }}
                />
            </CursorFollow>

            {/* Editorial background grid */}
            <BackgroundGrid isDark={isDark} />

            {/* Navigation */}
            <Navbar isDark={isDark} onToggle={toggle} />

            {/* Main content */}
            <main className="flex-grow relative z-10">
                <Hero isDark={isDark} />
                <Metrics isDark={isDark} />
                <Projects isDark={isDark} />
                <FeaturesGrid isDark={isDark} />
                <About isDark={isDark} />
                <Contact isDark={isDark} />
            </main>

            <Footer isDark={isDark} />
        </CursorProvider>
    );
}

export default App;
