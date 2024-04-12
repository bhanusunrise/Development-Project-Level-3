import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this); // New method for smooth scrolling
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm bg-white border-bottom box-shadow mb-3 fixed-top" container>
                    <NavbarBrand tag={Link} to="/">Ampanna.com</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink className="text-dark" onClick={() => this.scrollToSection('intro')}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" onClick={() => this.scrollToSection('about-menu')}>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" onClick={() => this.scrollToSection('pricing-menu')}>Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" onClick={() => this.scrollToSection('contact-menu')}>Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
