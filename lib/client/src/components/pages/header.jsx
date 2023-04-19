import { useContext } from 'react';
import { ThemeContext } from './themeProvider';
import { useState, useEffect } from 'react';
import '../styles/header.css' 
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className={darkMode ? 'dark' : ''}>
      <button className='btn' onClick={toggleDarkMode}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </header>
  );
};

export {Header};