import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventsNavbar.css";
import "./EventsLinkDropdown";
import EventsLinkDropdown from "./EventsLinkDropdown";

export class EventsNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const height = document.querySelector(".nav-container-EventsNavbar")
      .clientHeight;
    const isTop = window.scrollY < height;

    if (isTop) {
      this.setState({ scrolled: false });
    } else {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const { url } = this.props;
    let mainClassName = "nav-container-EventsNavbar";
    let navContainerClass = "nav-link-container-EventsNavbar";
    let navLinkClass = "nav-link-EventsNavbar";

    if (this.state.scrolled) {
      navContainerClass = "nav-link-container-EventsNavbar-scrolled";
      navLinkClass = "nav-link-EventsNavbar-scrolled";
      mainClassName += " BorderBottom-EventsNavbar";
    }

    return (
      <div className="switcher-class-EventsNavbar">
        <div className={mainClassName}>
          <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Navbar.Brand className="main-web-name-EventsNavbar" href="/events">
              Events
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="w-100 justify-content-around">
                {/* ALL EVENTS */}

                <div className={navContainerClass}>
                  <NavLink
                    className={navLinkClass}
                    to={`${url}/AllEvents`}
                    id="events-navbar-AllEvents"
                  >
                    <div>ALL EVENTS</div>
                  </NavLink>
                </div>

                {/* WORKSHOPS */}
                <div className={navContainerClass}>
                  <NavLink
                    className={navLinkClass}
                    to={`${url}/Workshops`}
                    id="events-navbar-Workshops"
                  >
                    <div>WORKSHOPS</div>
                  </NavLink>
                </div>

                {/* TALKS */}
                <div className={navContainerClass}>
                  <NavLink
                    className={navLinkClass}
                    to={`${url}/Talks`}
                    id="events-navbar-Talks"
                  >
                    <div>TALKS</div>
                  </NavLink>
                </div>

                {/* ACTIVITIES */}
                <div className={navContainerClass}>
                  <NavLink
                    className={navLinkClass}
                    to={`${url}/Activities`}
                    id="events-navbar-Activities"
                  >
                    <div>ACTIVITIES</div>
                  </NavLink>
                </div>

                {/* COMPETITIONS */}
                <div className={navContainerClass}>
                  <NavLink
                    className={navLinkClass}
                    to={`${url}/Competitions`}
                    id="events-navbar-Competitions"
                  >
                    <div>COMPETITIONS</div>
                  </NavLink>
                </div>

                {/* CALENDAR EVENTS */}
                <div className={`calendarLink-EventsNavbar ${navContainerClass}`}>
                  <NavLink
                    className={navLinkClass}
                    to={`${url}/CalendarEvents`}
                    id="events-navbar-CalendarEvents"
                  >
                    <div>CALENDAR EVENTS</div>
                  </NavLink>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <EventsLinkDropdown />

      </div>
    );
  }
}

export default EventsNavbar;
