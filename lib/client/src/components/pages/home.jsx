import { useState, useEffect } from "react";


function HomePage({user, setUser}) {
    return (
        <div className = "homepage">
            <div>
                <a href="/access">Login</a>
            </div>
            <div className = "crystal">Crystal</div>
        </div>
    );
}

export default HomePage;