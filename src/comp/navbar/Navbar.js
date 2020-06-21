import React, { Component } from 'react';

//CSS
import './css/navbar.css';
import img_cart from '../../img/cart.svg';

class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <div className = "navbar__section">
                    <a className = "navbar__cart-button" href = "/pages/cart" >
                        <img className = "navbar__icon" src = {img_cart} alt = ""/>
                    </a>
                </div>
                <div className = "navbar__section">
                    <a className="navbar__brand--medium" href="/">CS Tech</a>
                </div>
            </header>         
        );
    }
}

export default Navbar;