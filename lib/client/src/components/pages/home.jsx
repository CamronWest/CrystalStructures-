import { useState, useEffect } from "react";
import NavBar from "./navBar";

function HomePage({user, setUser}) {

    
    return (
        <div className = "homepage">
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <div className = "homepage-content">
                
            </div>
        </div>
    );
}

export default HomePage;