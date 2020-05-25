import React, { Component } from 'react';

//CSS
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "page-footer">
                    <div className = "footer-content --light"> Made by <a href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Erick</a> with love :3</div>            
                </div>
            </React.Fragment>         
        );
    }
}

export default Footer;