import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);
  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
