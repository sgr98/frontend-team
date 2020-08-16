/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClubsNavbar.css';

const ClubsNavbar = (props) => {
  return (
    <div className="nav-container-ClubsNavbar">
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Navbar.Brand className="main-web-name-ClubsNavbar" href="#home">
          TECH-HUB IIT TIRUPATI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* HOME */}
            <Nav.Link
              className="nav-link-ClubsNavbar"
              href="#home"
              id="home-ClubsNavbar"
            >
              HOME
            </Nav.Link>

            {/* OUR TEAM */}
            <Nav.Link
              as={Link}
              className="nav-link-ClubsNavbar"
              id="ourTeam-ClubsNavbar"
              to={{ pathname: `/clubs/${props.clubName}`, hash: '#OurTeam' }}
              onClick={() => {
                if (document.getElementById('OurTeam')) {
                  document.getElementById('OurTeam').scrollIntoView();
                }
              }}
            >
              OUR TEAM
            </Nav.Link>

            {/* GALLERY */}
            <Nav.Link
              as={Link}
              className="nav-link-ClubsNavbar"
              to={`/clubs/${props.clubName}/Gallery`}
              id="gallery-ClubsNavbar"
            >
              GALLERY
            </Nav.Link>

            {/* CONTACT US */}
            <Nav.Link
              as={Link}
              className="nav-link-ClubsNavbar"
              to={`/clubs/${props.clubName}/About`}
              id="contactUs-ClubsNavbar"
            >
              ABOUT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(ClubsNavbar);
