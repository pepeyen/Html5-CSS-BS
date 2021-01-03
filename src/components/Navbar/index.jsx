import React from 'react';
import { Link } from "react-router-dom"; 

//Styles
import './navbar.css';

function Navbar(props) {
    return (
        <header className={`navbar -${props.language}`} >
            <Link className = "navbar__section" to = "/">CS Tech</Link>               
        </header>         
    );
}

export default Navbar;