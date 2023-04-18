import './App.css';
import LoginSignUp from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from './components/pages/home';
import NavBar from './components/pages/navBar';

function App() {
  

  return (
    <div>
      <NavBar />
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <LoginSignUp />
        </Route>
        <Route exact path="/login">

        </Route> 
      </Switch>
    </div>
  );
}

export default App; 