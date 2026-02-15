import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="mb-24 pt-12 relative flex flex-col items-start">
      <div className="max-w-md text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 animate-fade-in-up uppercase tracking-wider">
        AI-Driven Clinical Intelligence
      </div>
      <h1 className="text-[10vw] leading-[0.8] font-black tracking-tighter text-black dark:text-white mb-6 uppercase select-none transition-all duration-500 whitespace-nowrap">
        MEDYPHAS <span className="text-[8vw]">AI</span>
      </h1>
      <div className="max-w-2xl text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
        Intelligent Patient Triage System
      </div>

      <a
        href="https://github.com/ajaykumarreddy-k/Medyphas-AI-Intelligent-Patient-Triage-System"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-primary"
      >
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
        </svg>
        <span className="font-hand text-4xl font-bold pt-2 tracking-wide">View on GitHub</span>
      </a>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">App/portal theme - Claymorphism</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 italic">Scroll down to review / to verify the Documentation</p>
      </div>
    </header>
  );
};

export default Hero;