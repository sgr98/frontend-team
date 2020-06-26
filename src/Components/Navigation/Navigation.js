/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import GetInspiredBulbIcon from './GetInspiredBulbIcon.png';

export function Navigation() {
  const { path } = useRouteMatch();
  return (
    <div className="nav-container-Navigation BorderBottom-Navigation">
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
        <Navbar.Brand className="main-web-name-Navigation" href="/Home">
          Tech Hub IIT Tirupati
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* HOME */}
            <Nav.Link
              className="nav-link-Navigation "
              href="/Home"
              active={path === '/' || path === '/Home'}
            >
              Home
            </Nav.Link>

            {/* ABOUT */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              href="#about"
              title="About"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#team2020-21"
                className="about-menuitem-Navigation"
              >
                Team 2020-21
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#alumini"
                className="about-menuitem-Navigation"
              >
                Alumini
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#faqs"
                className="about-menuitem-Navigation"
              >
                FAQs
              </NavDropdown.Item>
            </NavDropdown>

            {/* EVENTS */}
            {/* <NavDropdown
                className="nav-dropdown-Navigation"
                title="Events"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  href="/Events"
                  className="events-menuitem-Navigation"
                >
                  CodeX
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#robo-wars"
                  className="events-menuitem-Navigation"
                >
                  Robo Wars
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#solo singing"
                  className="events-menuitem-Navigation"
                >
                  Solo Singing
                </NavDropdown.Item>
              </NavDropdown> */}
            <Nav.Link
              className="nav-link-Navigation "
              href="/Events"
              active={path === '/Events'}
            >
              Events
            </Nav.Link>

            {/* PROJECTS */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title="Projects"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#projects"
                className="projects-menuitem-Navigation"
              >
                Projects
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#faculty-mentor"
                className="projects-menuitem-Navigation"
              >
                Faculty Mentor
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#infrastructure"
                className="projects-menuitem-Navigation"
              >
                Infrastructure
              </NavDropdown.Item>
            </NavDropdown>

            {/* TECH TEAMS */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title="Tech Teams"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#formula-bharath"
                className="techteams-menuitem-Navigation"
              >
                Formula Bharath
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#truss-fab"
                className="techteams-menuitem-Navigation"
              >
                Truss Fab
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#mars-rover"
                className="techteams-menuitem-Navigation"
              >
                Mars Rover
              </NavDropdown.Item>
            </NavDropdown>

            {/* CLUBS */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title="Clubs"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#techmaniacs"
                className="clubs-menuitem-Navigation"
              >
                Techmaniacs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#digital-wizards"
                className="clubs-menuitem-Navigation"
              >
                Digital Wizards
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#gagan-vedhi"
                className="clubs-menuitem-Navigation"
              >
                Gagan Vedhi
              </NavDropdown.Item>
            </NavDropdown>

            {/* GET INSPIRED */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title={
                <span>
                  Get Inspired
                  <img
                    src={GetInspiredBulbIcon}
                    alt="GetInspiredBulbIcon"
                    style={{ height: '1em' }}
                  />
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#ideas-square"
                className="getinspired-menuitem-Navigation"
              >
                Ideas Square
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#e-cell"
                className="getinspired-menuitem-Navigation"
              >
                E-cell
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#challenges"
                className="getinspired-menuitem-Navigation"
              >
                Challenges
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
