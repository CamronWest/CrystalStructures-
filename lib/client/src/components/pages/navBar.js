
import { ThemeProvider } from "./themeProvider";
import {Header} from "./header";
import HTTPClient from "../../HTTPClient";
import '../styles/NavBar.css'


const Logout = () =>{
    

    const logoutUser = async () =>{
        await HTTPClient.post("http://127.0.0.1:5555/logout");
        window.location.href = "/";
    };
    return (
        <div>
            <a className = "logout-btn" href="/">Logout</a>
        </div>
    )
    
}
function NavBar() {


    return (
        
        <div className = "navbar">
            <ul className="globalnav-list">
                <li className="logo">
                <p>
                    <img src="https://raw.githubusercontent.com/0xPacman/0xPacman/master/spin.gif" alt="loading..." />
                </p>
                </li>
                
                <li className="dark-light-list">
                <li className="docs-list">
                    <a href="https://learnxinyminutes.com/">Documentation</a>
                </li>
            <ThemeProvider>
                <Header />
            </ThemeProvider>
            <li className="UserProfile-list">
                <a href="/your-solutions">UserProfile</a>
            </li>
            </li>
            <li className="site-name">
                <p>Crystal Structures</p>
            </li>
                <li className="home-list">
                    <a className = "home"href="/home">Home</a>
                </li>
                <li className="logout-list">
                    <Logout />
                </li>
            </ul>
        </div>
                
            
                
    );
}

export default NavBar;