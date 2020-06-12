import React, { Component } from 'react';

//CSS
import './css/404.css';

//Componets
import NavigationBar from '../../comp/navigation-bar/NavigationBar.js';
import Footer from '../../comp/footer/Footer.js';

class NotFoundPage extends Component{
    render() {
        return (
            <div className = "error-page">
                <NavigationBar />
                <div className="error-page__content">
                    <text className = "error-page__message--bold">404</text>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NotFoundPage;