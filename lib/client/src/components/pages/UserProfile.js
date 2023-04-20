import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


const UserProfile = (props) => {
const [user, setUser] = useState(null);
const { state } = useLocation();



return (
    <div>
        <h1>Solutions</h1>
        <a href="/IDE">IDE</a>
        <a href="/home">home</a>

        <p>Solutions: 
        {state.text}
        </p>
    </div>
    )
}


export { UserProfile }