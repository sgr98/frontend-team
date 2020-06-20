import React, { Component } from "react";
import {Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsNavbar.css';

class EventsNavbar extends Component {
  render() {
    return (
      <div className="nav-container-EventsNavbar">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#all-events" className="nav-link-EventsNavbar">
              ALL EVENTS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#workshops" className="nav-link-EventsNavbar">
              WORKSHOPS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#talks" className="nav-link-EventsNavbar">
              TALKS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#activities" className="nav-link-EventsNavbar">
              ACTIVITIES
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#competitions" className="nav-link-EventsNavbar">
              COMPETITIONS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#calender-events" className="nav-link-EventsNavbar">
              CALENDAR EVENTS
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default EventsNavbar;
