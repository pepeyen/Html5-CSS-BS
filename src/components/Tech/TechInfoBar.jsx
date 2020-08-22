import React from 'react';

//Styles
import './tech.css';


function TechInfoBar(props) {
    return (
        <div className = "tech-bar">
            <div className = "tech-bar__body">
                <div className = "tech-bar__profile">
                    <div className = "tech-bar__avatar--shadowed" style={{backgroundColor: props.color}}>
                        <img className = "tech-bar__avatar-image" src = {props.techUrl} alt="Avatar"/>
                    </div>
                </div>
                <div className = "tech-bar__description--shadowed">
                    <p className = "tech-bar__info--extra-light"> {props.info}</p>
                </div>
            </div>
        </div>
    );
}

export default TechInfoBar;