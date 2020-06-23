import React, { Component } from 'react';

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
                    <a className="navbar__brand--medium" href="/">CS Tech</a>
                </div>               
                <div className = {`navbar__section cart-button--${cartState}`}>
                    <a className = "navbar__cart" href = "/pages/cart" >
                        <img className = "navbar__icon" src = {img_cart} alt = ""/>
                    </a>
                </div>
            </header>         
        );
    }
}

export default Navbar;