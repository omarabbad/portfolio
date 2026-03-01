import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { useTheme } from '@/lib/useTheme';

function App() {
    const { isDark, toggle } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col relative w-full overflow-x-hidden transition-colors duration-300 ${isDark ? 'text-[#E8E8E5]' : 'text-text-primary'}`}>
            <CustomCursor isDark={isDark} />
            <Navbar isDark={isDark} onToggle={toggle} />
            <main className="flex-grow">
                <Hero isDark={isDark} />
                <About isDark={isDark} />
                <FeaturesGrid isDark={isDark} />
                <Projects isDark={isDark} />
                <Contact isDark={isDark} />
            </main>
            <Footer isDark={isDark} />
        </div>
    );
}

export default App;
