import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsNavbar.css';

export class EventsNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const height = document.querySelector('.nav-container-EventsNavbar')
      .clientHeight;
    const isTop = window.scrollY < height;

    if (isTop) {
      this.setState({ scrolled: false });
    } else {
      this.setState({ scrolled: true });
    }
  };

  render() {
    let mainClassName = 'nav-container-EventsNavbar';
    let navContainerClass = 'nav-link-container-EventsNavbar';
    let navLinkClass = 'nav-link-EventsNavbar';
    if (this.state.scrolled) {
      navContainerClass = 'nav-link-container-EventsNavbar-scrolled';
      navLinkClass = 'nav-link-EventsNavbar-scrolled';
      mainClassName += ' BorderBottom-EventsNavbar';
    }

    return (
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
                <Nav.Link
                  className={navLinkClass}
                  href={`${this.props.url}/AllEvents`}
                  id="events-navbar-AllEvents"
                >
                  <div>ALL EVENTS</div>
                </Nav.Link>
              </div>

              {/* WORKSHOPS */}
              <div className={navContainerClass}>
                <Nav.Link
                  className={navLinkClass}
                  href={`${this.props.url}/Workshops`}
                  id="events-navbar-Workshops"
                >
                  <div>WORKSHOPS</div>
                </Nav.Link>
              </div>

              {/* TALKS */}
              <div className={navContainerClass}>
                <Nav.Link
                  className={navLinkClass}
                  href={`${this.props.url}/Talks`}
                  id="events-navbar-Talks"
                >
                  <div>TALKS</div>
                </Nav.Link>
              </div>

              {/* ACTIVITIES */}
              <div className={navContainerClass}>
                <Nav.Link
                  className={navLinkClass}
                  href={`${this.props.url}/Activities`}
                  id="events-navbar-Activities"
                >
                  <div>ACTIVITIES</div>
                </Nav.Link>
              </div>

              {/* COMPETITIONS */}
              <div className={navContainerClass}>
                <Nav.Link
                  className={navLinkClass}
                  href={`${this.props.url}/Competitions`}
                  id="events-navbar-Competitions"
                >
                  <div>COMPETITIONS</div>
                </Nav.Link>
              </div>

              {/* CALENDAR EVENTS */}
              <div className={navContainerClass}>
                <Nav.Link
                  className={navLinkClass}
                  href={`${this.props.url}/CalendarEvents`}
                  id="events-navbar-CalendarEvents"
                >
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
