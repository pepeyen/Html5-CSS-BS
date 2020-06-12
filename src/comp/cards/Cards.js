import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

//CSS
import './css/cards.css';

//Card Images
import img_html from "../../img/html5.png";
import img_css from "../../img/css3.png";
import img_php from "../../img/php.png";
import img_jsf from "../../img/jsf.png";
import img_react from "../../img/reactjs.png";

class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "c-card">
                    <Link className = "c-card__body" to="/pages/html5" target="" rel="noopener noreferrer">
                        <img className = "c-card__image" src = {img_html} alt = "Icon handmade of html" />
                        <div className = "c-card__description">
                            <p className = "c-card__title--medium">Html</p>
                            <p className = "c-card__text--extra-light">Clique aqui para saber mais sobre a tecnlogia HTML5</p>  
                        </div>
                    </Link>

                    <Link className = "c-card__body" to="/pages/css3" target="" rel="noopener noreferrer">
                        <img className = "c-card__image" src = {img_css} alt = "Icon handmade of css" />
                        <div className = "c-card__description">
                            <p className = "c-card__title--medium">CSS</p>
                            <p className = "c-card__text--extra-light">Clique aqui para saber mais sobre a tecnlogia CSS</p>      
                        </div>         
                    </Link>

                    <Link  className = "c-card__body" to="/pages/php" target="" rel="noopener noreferrer">
                        <img className = "c-card__image" src = {img_php} alt = "Icon handmade of php" />
                        <div className = "c-card__description">
                            <p className = "c-card__title--medium">PHP</p>  
                            <p className = "c-card__text--extra-light">Clique aqui para saber mais sobre a tecnlogia PHP</p> 
                        </div>                     
                    </Link>

                    <Link  className = "c-card__body" to="/pages/jsf" target="" rel="noopener noreferrer">
                        <img className = "c-card__image" src = {img_jsf} alt = "Icon handmade of jsf" />
                        <div className = "c-card__description">
                            <p className = "c-card__title--medium">JSF</p>  
                            <p className = "c-card__text--extra-light">Clique aqui para saber mais sobre a tecnlogia JSF</p>
                        </div>                      
                    </Link>

                    <Link className = "c-card__body" to="/pages/reactjs" target="" rel="noopener noreferrer">
                        <img className = "c-card__image" src = {img_react} alt = "Icon handmade of react" />
                        <div className = "c-card__description">
                            <p className = "c-card__title--medium">React</p> 
                            <p className = "c-card__text--extra-light">Clique aqui para saber mais sobre a tecnlogia React JS</p> 
                        </div>                       
                    </Link>
                </div>
            </React.Fragment>         
        );
    }
}

export default Cards;