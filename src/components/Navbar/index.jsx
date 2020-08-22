import React from 'react';
import { Link } from "react-router-dom"; 

//Styles
import './navbar.css';

function Navbar(props) {
    return (
        <header className={`navbar -${props.language}`} >
            <div className = "navbar__section">
                <Link className="navbar__brand--medium" to = "/" >CS Tech</Link>
            </div>               
        </header>         
    );
}

export default Navbar;