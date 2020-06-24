import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
//CSS
import './css/navbar.css';
import img_cart from '../../img/cart.svg';

class Navbar extends Component {
    render() {
        let cartState;

        if(this.props.isCartVisible === true){
            cartState = 'visible'
        }else
            cartState = 'hidden';

        return (
            <header className={`navbar -${this.props.language}`} >
                 <div className = "navbar__section">
                    <Link className="navbar__brand--medium" to = "/" >CS Tech</Link>
                </div>               
                <div className = {`navbar__section cart-button--${cartState}`}>
                    <Link className = "navbar__cart" to = "/shop/cart" >
                        <img className = "navbar__icon" src = {img_cart} alt = ""/>
                    </Link>
                </div>
            </header>         
        );
    }
}

export default Navbar;