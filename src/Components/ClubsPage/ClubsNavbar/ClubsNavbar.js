import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClubsNavbar.css';

export class ClubsNavbar extends Component {
    render() {    

        return (
            <div className="nav-container-ClubsNavbar">
                <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">

                    <Navbar.Brand className="main-web-name-ClubsNavbar" href="#home">TECH-HUB IIT TIRUPATI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">

                            {/* HOME */}
                            <Nav.Link className="nav-link-ClubsNavbar" href="#home" id="home-ClubsNavbar">
                                HOME
                            </Nav.Link>

                            {/* OUR TEAM */}
                            <Nav.Link className="nav-link-ClubsNavbar" href="#OurTeam" id="ourTeam-ClubsNavbar">
                                OUR TEAM
                            </Nav.Link>

                            {/* ALUMINI */}
                            <Nav.Link className="nav-link-ClubsNavbar" href="#Alumini" id="alumini-ClubsNavbar">
                                ALUMINI
                            </Nav.Link>

                            {/* GALLERY */}
                            <Nav.Link className="nav-link-ClubsNavbar" href="#Gallery" id="gallery-ClubsNavbar">
                                GALLERY
                            </Nav.Link>

                            {/* CONTACT US */}
                            <Nav.Link className="nav-link-ClubsNavbar" href="#ContactUs" id="contactUs-ClubsNavbar">
                                CONTACT US
                            </Nav.Link>
                            
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

export default ClubsNavbar;
