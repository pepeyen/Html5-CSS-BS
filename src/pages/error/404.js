import React, { Component } from 'react';

//CSS
import './css/404.css';

//Componets
import Navbar from '../../comp/navbar/Navbar.js';

class NotFoundPage extends Component{
    render() {
        return (
            <div className = "error-page">
                <Navbar isCartVisible = {false} />
                <div className="error-page__content">
                    <p className = "error-page__message--bold">404</p>     
                </div>
                <div className="error-page__content">
                    <p className = "error-page__info--light">Page not found</p>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;