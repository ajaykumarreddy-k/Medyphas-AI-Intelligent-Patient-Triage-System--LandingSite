import React from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        <span className="material-icons block dark:hidden">dark_mode</span>
        <span className="material-icons hidden dark:block">light_mode</span>
      </button>
    </div>
  );
};

export default ThemeToggle;