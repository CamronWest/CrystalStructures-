import { useState, useEffect } from "react";
import NavBar from "./navBar";
import ProblemsList from "./problemList";
import "../styles/home.scss";
function HomePage({user, setUser}) {

    
    return (
        <div className = "homepage">
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <section>
                <div className = "section">
                    <ProblemsList />
                </div>
            </section>
            
        </div>
    );
}

export default HomePage;