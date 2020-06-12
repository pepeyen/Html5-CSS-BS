import React, { Component } from 'react';

//CSS
import './css/navigation-bar.css';

//Boostrap Plugin - BS as Boostrap to prevent naming collisions
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarToggler,
    NavbarBrand 
} from 'reactstrap';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className = "navbar">
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand className="navbar__brand--extra-light" href="/">CS Tech</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto navbar__link--extra-light" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/pepeyen" target="_blank">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>       
        );
    }
}

export default NavigationBar;