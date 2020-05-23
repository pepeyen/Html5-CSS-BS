import React, { Component } from 'react';

//CSS
import './css/tech.css';

class TechInfoBar extends Component {
    render() {
        return (
            <div className = "tech-profile-body">
                <div className = "tech-profile --shadow" style={{backgroundColor: this.props.color}}>
                    <img className = "tech-avatar-image" src = {this.props.techUrl} alt="Avatar" />
                </div>
                <div className = "tech-profile-info-box --extra-light">
                    <div className = "tech-profile-info-text"><p>{this.props.info}</p></div>
                </div>
            </div>
        );
      }
}

export default TechInfoBar;