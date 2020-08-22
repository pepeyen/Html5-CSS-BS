import React from 'react';

//Styles
import './404.css';

//Components
import Navbar from '../../components/Navbar';

function NotFound() {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                <div className="error-page__content">
                    <p className = "error-page__message--bold">404</p>     
                </div>
                <div className="error-page__content">
                    <p className = "error-page__info--light">Page not found</p>
                </div>
            </main>
        </React.Fragment>
    );
}

export default NotFound;