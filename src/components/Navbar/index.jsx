import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
//CSS
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header className={`navbar -${this.props.language}`} >
                 <div className = "navbar__section">
                    <Link className="navbar__brand--medium" to = "/" >CS Tech</Link>
                </div>               
            </header>         
        );
    }
}

export default Navbar;