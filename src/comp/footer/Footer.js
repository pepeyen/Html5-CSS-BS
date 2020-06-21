import React, { Component } from 'react';

//CSS
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className = "footer">
                <p className = "footer__content--light"> 
                    Made by <a className="footer__link" href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Erick</a> with love :3
                </p>            
            </footer>        
        );
    }
}

export default Footer;