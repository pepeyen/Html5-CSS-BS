import React, { Component } from 'react';

//Components
import Navbar from '../comp/navbar/Navbar.js';
import Cards from '../comp/cards/Cards.js';
import Footer from '../comp/footer/Footer.js';

class MainPage extends Component{
    render() {
        return (
            <div className = "main-page">
                <Navbar cartState = 'hidden' />
                <main>
                    <Cards />
                </main>
                <Footer />
            </div>
        );
    }
}

export default MainPage;