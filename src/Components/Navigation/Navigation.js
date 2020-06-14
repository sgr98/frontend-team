/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import 'font-awesome/css/font-awesome.min.css';

export class Navigation extends Component {
  render() {
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
              <Nav.Link className="nav-link-Navigation get-inspired-Navigation" href="#get-inspired">
                Get Inspired<div className="fas fa-lightbulb"></div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
