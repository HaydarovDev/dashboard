import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme = localStorage.getItem('theme');
  const [dark, setDark] = useState<boolean>(storedTheme === 'dark');

  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';

    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
