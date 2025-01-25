import { useEffect, useState } from 'react';

const useTheme = () => {
  // Retrieve theme from localStorage or default to 'system'
  const storedTheme = localStorage.getItem('theme') || 'system';
  const [theme, setTheme] = useState(storedTheme);
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark' || (theme === 'system' && darkMode)) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Save theme in localStorage whenever it changes
    localStorage.setItem('theme', theme);

  }, [theme, darkMode]);

  return [theme, setTheme];
};

export default useTheme;
