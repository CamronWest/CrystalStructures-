import './App.css';
import SignUpForm from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from './components/styles/themeProvider';
import { Header } from './components/styles/header';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <SignUpForm />
    </div>
  );
}

export default App;
