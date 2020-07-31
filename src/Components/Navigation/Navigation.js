/* eslint-disable react/prefer-stateless-function */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import GetInspiredBulbIcon from './GetInspiredBulbIcon.png';

export function Navigation() {
  const [clubs, setClubs] = useState([]);
  const [techTeams, setTechTeams] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/clubs`)
      .then((res) => {
        setClubs(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/tech_teams`)
      .then((res) => {
        setTechTeams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="nav-container-Navigation BorderBottom-Navigation">
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
        <Navbar.Brand className="main-web-name-Navigation">
          <NavLink to="/home">Tech Hub IIT Tirupati</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* HOME */}
            <NavLink className="nav-link-Navigation " to="/home">
              Home
            </NavLink>

            {/* ABOUT */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title="About"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/TechnicalCommittee"
                className="about-menuitem-Navigation"
              >
                Technical Committee
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/WebTeam"
                className="about-menuitem-Navigation"
              >
                Web Team
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                href="#faqs"
                className="about-menuitem-Navigation"
              >
                FAQs
              </NavDropdown.Item> */}
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
            <NavLink className="nav-link-Navigation " to="/Events">
              Events
            </NavLink>

            {/* PROJECTS */}
            <NavLink className="nav-link-Navigation " to="/projects">
              Projects
            </NavLink>
            {/* <NavDropdown
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
            </NavDropdown> */}

            {/* TECH TEAMS */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title="Tech Teams"
              id="collasible-nav-dropdown"
            >
              {techTeams.map(({ _id, team_name }) => {
                return (
                  <NavDropdown.Item
                    key={_id}
                    as={Link}
                    to={`/TechTeam/${_id}`}
                    className="techteams-menuitem-Navigation"
                  >
                    {team_name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            {/* CLUBS */}
            <NavDropdown
              className="nav-dropdown-Navigation"
              title="Clubs"
              id="collasible-nav-dropdown"
            >
              {clubs.map(({ name }, index) => {
                return (
                  <NavDropdown.Item
                    key={name + index}
                    as={Link}
                    to={`/clubs/${name}`}
                    className="clubs-menuitem-Navigation"
                  >
                    {name}
                  </NavDropdown.Item>
                );
              })}
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
              {/* <NavDropdown.Item
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
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/achievements"
                className="getinspired-menuitem-Navigation"
              >
                Hall of Fame
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/challenges/all"
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
