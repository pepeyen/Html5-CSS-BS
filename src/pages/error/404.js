import React, { Component } from 'react';

//CSS
import './css/404.css';

//Componets
import Navbar from '../../comp/navbar/Navbar.js';
import Footer from '../../comp/footer/Footer.js';

class NotFoundPage extends Component{
    render() {
        return (
            <div className = "error-page">
                <Navbar />
                <div className="error-page__content">
                    <text className = "error-page__message--bold">404</text>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NotFoundPage;