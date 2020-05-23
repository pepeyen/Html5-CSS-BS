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
                    <a className = "card" href="../pages/html5" target="_blank" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_html} alt = "Icon handmade of html" />
                        <div className = "card-body">
                            <text className = "card-title --light">Html Card</text>
                            <text className = "card-info --extra-light">Just a Html Card, tho it can be anything, i mean, i'm the creator of this website.</text>  
                        </div>
                    </a>

                    <a className = "card" href="../pages/css3" target="_blank" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_css} alt = "Icon handmade of css" />
                        <div className = "card-body">
                            <text className = "card-title --light">CSS Card</text>
                            <text className = "card-info --extra-light">Just a CSS Card, tho it can be anything, i mean, i'm the creator of this website.</text>      
                        </div>         
                    </a>

                    <a  className = "card" href="../pages/php" target="_blank" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_php} alt = "Icon handmade of php" />
                        <div className = "card-body">
                            <text className = "card-title --light">PHP Card</text>  
                            <text className = "card-info --extra-light">Just a PHP Card, tho it can be anything, i mean, i'm the creator of this website.</text> 
                        </div>                     
                    </a>

                    <a  className = "card" href="../pages/jsf" target="_blank" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_jsf} alt = "Icon handmade of jsf" />
                        <div className = "card-body">
                            <text className = "card-title --light">JSF Card</text>  
                            <text className = "card-info --extra-light">Just a JSF Card, tho it can be anything, i mean, i'm the creator of this website.</text>
                        </div>                      
                    </a>

                    <a className = "card" href="../pages/reactjs" target="_blank" rel="noopener noreferrer">
                        <img className = "card-image" src = {img_react} alt = "Icon handmade of react"  />
                        <div className = "card-body">
                            <text className = "card-title --light">React Card</text> 
                            <text className = "card-info --extra-light">Just a React Card, tho it can be anything, i mean, i'm the creator of this website.</text> 
                        </div>                       
                    </a>
                </div>
            </React.Fragment>         
        );
    }
}

export default Cards;
