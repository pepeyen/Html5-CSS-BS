import React, { Component } from 'react';

import MainNavbar from '../../comp/navbar/Navbar.js';
import Footer from '../../comp/footer/Footer.js';


class NotFoundPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <div className="error">
                    <text className = "message --bold">404</text>
                </div>

                <Footer />
            </React.StrictMode>
        );
    }
}

export default NotFoundPage;