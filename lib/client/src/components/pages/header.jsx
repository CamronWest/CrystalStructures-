import { useContext } from 'react';
import { ThemeContext } from './themeProvider';
import { useState, useEffect } from 'react';
import '../styles/header.css' 
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className={darkMode ? 'dark' : ''}>
      <h1>Crystal Structures</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
};

export {Header};