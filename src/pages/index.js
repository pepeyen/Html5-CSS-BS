import React, { Component } from 'react';

//Components
import Cards from '../components/Cards';
import Footer from '../components/Footer';

class MainPage extends Component{
    render() {
        return (
            <div className = "main-page">
                <main>
                    <p className = ""></p>
                    <Cards />
                </main>
                <Footer />
            </div>
        );
    }
}

export default MainPage;