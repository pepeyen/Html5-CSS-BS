import React, { Component } from 'react';

//CSS
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                <div className = "footer__content--light"> Made by <a href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Erick</a> with love :3</div>            
            </div>        
        );
    }
}

export default Footer;