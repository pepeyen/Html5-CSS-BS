import React, { Component } from 'react';

//CSS
import './404.css';

//Components
import Navbar from '../../components/Navbar';

class NotFoundPage extends Component{
    render() {
        return (
            <div className = "error-page">
                <Navbar />
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