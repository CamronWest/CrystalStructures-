import { useState, useEffect } from "react";
import { ThemeProvider } from "./themeProvider";
import {Header} from "./header";
import '../styles/NavBar.css'

function NavBar({user, setUser}) {
    return (
        
        <div className = "navbar">
            <div className = "logo">Crystal</div>
            <div className = "navlinks">
                <a className = "home"href="/home">Home</a>
                <a className = "signup"href="/signup">Signup</a>
                <a href="/login">Login</a>
                <a className = "logout"href="/logout">logout</a>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
            </div>
        </div>
    );
}

export default NavBar;