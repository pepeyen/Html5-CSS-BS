import React, { Component } from 'react';

//Card Images
import img_html from "../../img/html5.png";
import img_css from "../../img/css3.png";
import img_php from "../../img/php.png";
import img_jsf from "../../img/jsf.png";
import img_react from "../../img/reactjs.png";

//CSS
import './css/cards.css';

class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "page-cards">
                    <a className = "card" href="/pages/html5" target="" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_html} alt = "Icon handmade of html" />
                        <div className = "card-body">
                            <p className = "card-title --light">Html Card</p>
                            <p className = "card-info --extra-light">Clique aqui para saber mais sobre a tecnlogia HTML5</p>  
                        </div>
                    </a>

                    <a className = "card" href="/pages/css3" target="" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_css} alt = "Icon handmade of css" />
                        <div className = "card-body">
                            <p className = "card-title --light">CSS Card</p>
                            <p className = "card-info --extra-light">Clique aqui para saber mais sobre a tecnlogia CSS</p>      
                        </div>         
                    </a>

                    <a  className = "card" href="/pages/php" target="" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_php} alt = "Icon handmade of php" />
                        <div className = "card-body">
                            <p className = "card-title --light">PHP Card</p>  
                            <p className = "card-info --extra-light">Clique aqui para saber mais sobre a tecnlogia PHP</p> 
                        </div>                     
                    </a>

                    <a  className = "card" href="/pages/jsf" target="" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_jsf} alt = "Icon handmade of jsf" />
                        <div className = "card-body">
                            <p className = "card-title --light">JSF Card</p>  
                            <p className = "card-info --extra-light">Clique aqui para saber mais sobre a tecnlogia JSF</p>
                        </div>                      
                    </a>

                    <a className = "card" href="/pages/reactjs" target="" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_react} alt = "Icon handmade of react"  />
                        <div className = "card-body">
                            <p className = "card-title --light">React Card</p> 
                            <p className = "card-info --extra-light">Clique aqui para saber mais sobre a tecnlogia React JS</p> 
                        </div>                       
                    </a>
                </div>
            </React.Fragment>         
        );
    }
}

export default Cards;