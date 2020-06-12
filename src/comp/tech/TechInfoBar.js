import React, { Component } from 'react';

//CSS
import './css/tech.css';

//Cart icon
import img_cart from '../../img/cart.svg';

class TechInfoBar extends Component {
    render() {
        return (
            <div className = "tech-bar">
                <a className = "tech-bar__buy-button" href = "/pages/cart" >
                    <img className = "tech-bar__icon" src = {img_cart} alt = ""/>
                </a>
                <div className = "tech-bar__body">
                    <div className = "tech-bar__profile--shadowed" style={{backgroundColor: this.props.color}}>
                        <img className = "tech-bar__avatar" src = {this.props.techUrl} alt="Avatar" />
                    </div>
                    <div className = "tech-bar__description--shadowed">
                        <p className = "tech-bar__info--extra-light">
                            {this.props.info}
                        </p>
                    </div>
                </div>
            </div>
        );
      }
}

export default TechInfoBar;