import React, { Component } from 'react';

import MainNavbar from '../comp/navbar/Navbar.js';
import Cards from '../comp/cards/Cards.js';
import Footer from '../comp/footer/Footer.js';


class MainPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <Cards />
                <Footer />
            </React.StrictMode>
        );
    }
}

export default MainPage;