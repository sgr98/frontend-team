/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <div className="nav-container">
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
          <Navbar.Brand className="main-web-name" href="#home">
            Tech Hub IIT Tirupati
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navigation-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#clubs">
                Clubs
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#achievements">
                Achievements
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#ongoing-projets">
                Ongoing Projects
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#challenges">
                Challenges
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#faqs">
                FAQs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
