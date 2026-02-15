import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ProjectPreviewSection from './components/ProjectPreviewSection';
import ProjectQuickLook from './components/ProjectQuickLook';
import ArchitectureSection from './components/ArchitectureSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import CollaborationSection from './components/CollaborationSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme based on storage, default to light
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // slightly less than the 3s animation loop for smoother transition

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300"
        style={{ '--loader-bg': isDark ? '#111111' : '#FAFAFA' } as React.CSSProperties}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none red-gradient z-0 opacity-50 dark:opacity-20"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-12 animate-fade-in-up">
        <Hero />
        <WorkSection />
        <ProjectPreviewSection isDark={isDark} />
        <ProjectQuickLook isDark={isDark} />
        <ArchitectureSection />
        <ExperienceTimeline />
        <AboutSection />
        <TeamSection />
        <CollaborationSection />
        <Footer />
      </main>

      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
};


export default App;