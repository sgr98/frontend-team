/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import GetInspiredBulbIcon from "./GetInspiredBulbIcon.png";

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

              <NavDropdown
                className="nav-link-Navigation"
                href="#about"
                title="About"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#team2020-21">
                  Team 2020-21
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#alumini">Alumini</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav-link-Navigation" href="#events">
                Events
              </Nav.Link>

              <NavDropdown
                className="nav-link-Navigation"
                title="Projects"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#faculty-mentor">
                  Faculty Mentor
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#infrastructure">
                  Infrastructure
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="nav-link-Navigation"
                title="Tech Teams"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#formula-bharath">
                  Formula Bharath
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#truss-fab">Truss Fab</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#mars-rover">
                  Mars Rover
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="nav-link-Navigation"
                title="Clubs"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#techmaniacs">
                  Techmaniacs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#digital-wizards">
                  Digital Wizards
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#gagan-vedhi">
                  Gagan Vedhi
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="nav-link-Navigation"
                title="Get Inspired"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#formula-bharath">
                  Formula Bharath
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#truss-fab">Truss Fab</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#mars-rover">
                  Mars Rover
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link
                className="nav-link-Navigation get-inspired-Navigation"
                href="#get-inspired"
              >
                <img src={GetInspiredBulbIcon} alt="GetInspiredBulbIcon" />"
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
