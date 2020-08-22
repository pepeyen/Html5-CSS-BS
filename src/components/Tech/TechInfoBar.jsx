import React, { Component } from 'react';

//CSS
import './tech.css';


class TechInfoBar extends Component {
    render() {
        return (
            <div className = "tech-bar">
                <div className = "tech-bar__body">
                    <div className = "tech-bar__profile">
                        <div className = "tech-bar__avatar--shadowed" style={{backgroundColor: this.props.color}}>
                            <img className = "tech-bar__avatar-image" src = {this.props.techUrl} alt="Avatar"/>
                        </div>
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