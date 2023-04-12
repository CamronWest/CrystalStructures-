import './App.css';
import LoginSignUp from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from './components/pages/themeProvider';
import { Header } from './components/pages/header';
import HomePage from './components/pages/home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <LoginSignUp />
    </div>
  );
}

export default App;
