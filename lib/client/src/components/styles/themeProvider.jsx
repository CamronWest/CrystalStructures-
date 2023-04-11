import { createContext } from "react";
import { useState, useEffect } from "react";

const ThemeContext = createContext(); // default value is undefined

const ThemeProvider = ({ children }) =>{
    const [darkMode,setDarkMide] = useState(false);

    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.toggle('dark', darkMode);
    },[darkMode]);
    const toggleDarkMode = () => setDarkMide(!darkMode);

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContext, ThemeProvider };