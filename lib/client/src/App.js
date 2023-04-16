import './App.css';
import LoginSignUp from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from './components/pages/themeProvider';
import { Header } from './components/pages/header';
import HomePage from './components/pages/home';
import NavBar from './components/pages/navBar';

function App() {
  

  return (
    <div>
      <NavBar />
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <LoginSignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App