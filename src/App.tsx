import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { About } from '@/components/sections/About';
import { Metrics } from '@/components/sections/Metrics';
import { Contact } from '@/components/sections/Contact';
import { useTheme } from '@/lib/useTheme';

function App() {
    const { isDark, toggle } = useTheme();

    return (
        <div
            className="min-h-screen flex flex-col w-full overflow-x-hidden"
            style={{
                background: isDark ? '#000000' : '#FFFFFF',
                color: isDark ? '#F5F5F5' : '#000000',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
            <Navbar isDark={isDark} onToggle={toggle} />
            <main className="flex-grow">
                <Hero isDark={isDark} />
                <Projects isDark={isDark} />
                <Metrics isDark={isDark} />
                <FeaturesGrid isDark={isDark} />
                <About isDark={isDark} />
                <Contact isDark={isDark} />
            </main>
            <Footer isDark={isDark} />
        </div>
    );
}

export default App;
