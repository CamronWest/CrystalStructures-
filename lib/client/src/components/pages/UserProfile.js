import { useState, useEffect } from "react";
import React from "react";
import { useLocation } from 'react-router-dom';
import '../styles/UserProfile.css'

const UserProfile = (props) => {
const [user, setUser] = useState(null);
const { state } = useLocation();



return (
    <div>
        <h1 className="solution-title">Solutions</h1>
        <a id="IDE-title"href="/IDE">IDE</a>
        <a id="home-title"href="/home">home</a>

        <p className="solution-p">Solutions: 
            
        </p>
    </div>
    )
}


export { UserProfile }