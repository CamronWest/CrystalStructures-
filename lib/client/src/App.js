import './App.css';
import SignUpForm from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from './components/pages/themeProvider';
import { Header } from './components/pages/header';
import HomePage from './components/pages/home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Switch>
      <Route path="/">
        <HomePage user = {user} setUser={setUser} />
      </Route>
      <Route path="/signup">
        <div>
          <ThemeProvider>
            <Header />
          </ThemeProvider>
          <SignUpForm />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
