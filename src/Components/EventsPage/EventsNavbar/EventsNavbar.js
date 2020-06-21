import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventsNavbar.css";

class EventsNavbar extends Component {
  render() {
    return (
      <div className="nav-container-EventsNavbar">
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
          <Navbar.Brand href="#home" className="main-web-name-EventsNavbar">
            Tech Hub IIT Tirupati
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 justify-content-around">
              <Nav.Link href="#all-events" className="nav-link-EventsNavbar ">
                ALL EVENTS
              </Nav.Link>

              <Nav.Link href="#workshops" className="nav-link-EventsNavbar ">
                WORKSHOPS
              </Nav.Link>

              <Nav.Link href="#talks" className="nav-link-EventsNavbar ">
                TALKS
              </Nav.Link>

              <Nav.Link href="#activities" className="nav-link-EventsNavbar ">
                ACTIVITIES
              </Nav.Link>

              <Nav.Link href="#competitions" className="nav-link-EventsNavbar ">
                COMPETITIONS
              </Nav.Link>

              <Nav.Link
                href="#calender-events"
                className="nav-link-EventsNavbar "
              >
                CALENDAR EVENTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default EventsNavbar;
