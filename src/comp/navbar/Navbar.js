import React, { Component } from 'react';

//CSS
import './css/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <a className="navbar__brand--extra-light" href="/">CS Tech</a>
                <a className="navbar__link--extra-light" href="https://github.com/pepeyen" target="_blank" rel="noopener noreferrer">Github</a>
            </header>         
        );
    }
}

export default Navbar;