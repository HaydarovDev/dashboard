import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState<boolean | null>(null); // null — hali aniqlanmagan

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark';
    setDark(isDark);
    document.body.className = isDark ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    if (dark !== null) {
      document.body.className = dark ? 'dark' : 'light';
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  if (dark === null) return null;

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
