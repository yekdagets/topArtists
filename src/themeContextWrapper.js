import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './context/themeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
    console.log('theme',theme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove('dark-content');
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.add('dark-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}