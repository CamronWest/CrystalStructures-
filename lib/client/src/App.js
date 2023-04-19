import './App.css';
import LoginSignUp from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from './components/pages/home';
import NavBar from './components/pages/navBar';
import { LandingPage } from './components/pages/LandingPage';
import { IDE } from './components/pages/IDE.jsx';
import IDE_HTML from './components/pages/IDEHTML';

function App() {
  

  return (
    <div>
      
      
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/LoginOrsignup">
          <LoginSignUp />
        </Route>
        <Route exact path="/IDE">
          <IDE_HTML />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 