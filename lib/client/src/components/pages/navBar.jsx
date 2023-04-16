import { useState, useEffect } from "react";


function NavBar({user, setUser}) {
    return (
        <div className = "navbar">
            <div className = "logo">Crystal</div>
            <div className = "navlinks">
                <a id = "home"href="/home">Home</a>
                <a id = "signup"href="/signup">Signup</a>
            </div>
        </div>
    );
}

export default NavBar;