import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsNavbar.css';

export class EventsNavbar extends Component {
    render() {
        return (
            <div className="nav-container-EventsNavbar">
                <Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
                    <Navbar.Brand className="main-web-name-EventsNavbar" href="#home">
                        Tech Hub IIT Tirupati
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="w-100 justify-content-around">

                            {/* ALL EVENTS */}
                            <div className="nav-link-container-EventsNavbar">
                                <Nav.Link className="nav-link-EventsNavbar" href="#all-events" id="events-navbar-AllEvents">
                                    <div>ALL EVENTS</div>
                                </Nav.Link>
                            </div>

                            {/* WORKSHOPS */}
                            <div className="nav-link-container-EventsNavbar">
                            <Nav.Link className="nav-link-EventsNavbar" href="#workshops" id="events-navbar-Workshops">
                                <div>WORKSHOPS</div>
                            </Nav.Link>
                            </div>
                            
                            {/* TALKS */}
                            <div className="nav-link-container-EventsNavbar">
                            <Nav.Link className="nav-link-EventsNavbar" href="#talks" id="events-navbar-Talks">
                                <div>TALKS</div>
                            </Nav.Link>
                            </div>

                            {/* ACTIVITIES */}
                            <div className="nav-link-container-EventsNavbar">
                            <Nav.Link className="nav-link-EventsNavbar" href="#activities" id="events-navbar-Activities">
                                <div>ACTIVITIES</div>
                            </Nav.Link>   
                            </div> 

                            {/* COMPETITIONS */}
                            <div className="nav-link-container-EventsNavbar">
                            <Nav.Link className="nav-link-EventsNavbar" href="#competitions" id="events-navbar-Competitions">
                                <div>COMPETITIONS</div>
                            </Nav.Link>
                            </div>

                            {/* CALENDAR EVENTS */}
                            <div className="nav-link-container-EventsNavbar">
                            <Nav.Link className="nav-link-EventsNavbar" href="#calendar-events" id="events-navbar-CalendarEvents">
                                <div>CALENDAR EVENTS</div>
                            </Nav.Link>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default EventsNavbar;
