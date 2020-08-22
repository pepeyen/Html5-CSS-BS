import React from 'react';

//Styles
import './footer.css';

function Footer() {
    return (
        <footer className = "footer">
            <p className = "footer__content--light"> 
                Made by <a className="footer__link" href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Erick</a> with love :3
            </p>      
        </footer>        
    );
}

export default Footer;