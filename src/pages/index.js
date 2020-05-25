import React, { Component } from 'react';

//Components
import MainNavbar from '../comp/navbar/Navbar.js';
import Cards from '../comp/cards/Cards.js';
import Footer from '../comp/footer/Footer.js';

class MainPage extends Component{
    render() {
        return (
            <div className = "main-page">
                <MainNavbar />
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default MainPage;