/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import GetInspiredBulbIcon from './GetInspiredBulbIcon.png';

export class Navigation extends Component {
  render() {
    console.log('Rendering');
    return (
      <div className="nav-container ">
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
          <Navbar.Brand className="main-web-name" href="#home">
            Tech Hub IIT Tirupati
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link-Navigation " href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link-Navigation" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link-Navigation" href="#events">
                Events
              </Nav.Link>
              <Nav.Link className="nav-link-Navigation" href="#projets">
                Projects
              </Nav.Link>
              <Nav.Link className="nav-link-Navigation" href="#tech-teams">
                Tech Teams
              </Nav.Link>
              <Nav.Link className="nav-link-Navigation" href="#clubs">
                Clubs
              </Nav.Link>
              <Nav.Link
                className="nav-link-Navigation get-inspired-Navigation"
                href="#get-inspired"
              >
                Get Inspired
                <img src={GetInspiredBulbIcon} alt="GetInspiredBulbIcon" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
