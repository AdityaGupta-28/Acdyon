import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Architecture } from './components/Architecture';
import { CodeExamples } from './components/CodeExamples';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { EasterEggModal } from './components/EasterEggModal';
import { useKonamiCode } from './utils/konami';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hyperfetch-theme') || 'dark';
  });
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  // Sync theme with HTML data attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hyperfetch-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Register Konami Code listener (↑ ↑ ↓ ↓ ← → ← → B A)
  useKonamiCode(() => {
    setEasterEggOpen(true);
  });

  return (
    <div className="app-root">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenEasterEgg={() => setEasterEggOpen(true)}
      />

      <main>
        <Hero />
        <InteractiveDemo />
        <Architecture />
        <CodeExamples />
        <Features />
        <FAQ />
      </main>

      <Footer onOpenEasterEgg={() => setEasterEggOpen(true)} />

      <EasterEggModal
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
      />
    </div>
  );
}

export default App;
