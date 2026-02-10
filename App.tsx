import React, { useEffect, useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-dark text-white min-h-screen relative selection:bg-neon selection:text-black">
        
        {/* Global Grain Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-20 bg-noise mix-blend-overlay"></div>
        
        {/* Custom Cursor Follower */}
        <div 
          className="fixed w-96 h-96 bg-neon/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-screen transition-transform duration-100 ease-linear"
          style={{ 
            left: mousePosition.x, 
            top: mousePosition.y 
          }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full px-6 py-6 z-40 flex justify-between items-center mix-blend-difference text-white">
          <div className="font-display font-bold text-2xl tracking-tighter">PJC.</div>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/prajwal__14_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button className="text-sm font-mono uppercase hover:text-neon transition-colors">Menu</button>
          </div>
        </nav>

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default App;