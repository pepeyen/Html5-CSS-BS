import React, { Component } from 'react';

//CSS
import './css/cart.css';

//Components
import NavigationBar from '../../comp/navigation-bar/NavigationBar';
import Firestart from '../../comp/firestart/Firestart';
import Footer from '../../comp/footer/Footer';

class CartPage extends Component{

    render() {
        return (
            <div className = "cart-page">
                <NavigationBar cartState = 'hidden' />
                <Firestart firebaseDB = 'ISERT_DB_NAME_HERE' />
                <Footer />
            </div>
        );
    }
}

export default CartPage;