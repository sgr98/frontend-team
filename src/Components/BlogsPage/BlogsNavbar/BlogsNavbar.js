import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogsNavbar.css';

export class BlogsNavbar extends Component {
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
    const height = document.querySelector('.nav-container-BlogsNavbar')
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
    let mainClassName = 'nav-container-BlogsNavbar';
    let navContainerClass = 'nav-link-container-BlogsNavbar';
    let navLinkClass = 'nav-link-BlogsNavbar';
    if (this.state.scrolled) {
      navContainerClass = 'nav-link-container-BlogsNavbar-scrolled';
      navLinkClass = 'nav-link-BlogsNavbar-scrolled';
      mainClassName += ' BorderBottom-BlogsNavbar';
    }

    return (
      <div className={mainClassName}>
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
          <Navbar.Brand className="main-web-name-BlogsNavbar" href="/events">
            Blogs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 justify-content-around">
              {/* GENERAL */}
              <div className={navContainerClass}>
                <NavLink
                  className={navLinkClass}
                  to={`${url}/General`}
                  id="blogs-navbar-General"
                >
                  <div>GENERAL</div>
                </NavLink>
              </div>

              {/* TECHMANIACS */}
              <div className={navContainerClass}>
                <NavLink
                  className={navLinkClass}
                  to={`${url}/Techmaniacs`}
                  id="blogs-navbar-Techmaniacs"
                >
                  <div>TECHMANIACS</div>
                </NavLink>
              </div>

              {/* DIGITAL WIZARDS */}
              <div className={navContainerClass}>
                <NavLink
                  className={navLinkClass}
                  to={`${url}/DigitalWizards`}
                  id="blogs-navbar-DigitalWizards"
                >
                  <div>DIGITAL WIZARDS</div>
                </NavLink>
              </div>

              {/* GAGAN VEDHI */}
              <div className={navContainerClass}>
                <NavLink
                  className={navLinkClass}
                  to={`${url}/GaganVedhi`}
                  id="blogs-navbar-GaganVedhi"
                >
                  <div>GAGAN VEDHI</div>
                </NavLink>
              </div>

              {/* 3D PRINTING */}
              <div className={navContainerClass}>
                <NavLink
                  className={navLinkClass}
                  to={`${url}/3DPrinting`}
                  id="blogs-navbar-3DPrinting"
                >
                  <div>3D PRINTING</div>
                </NavLink>
              </div>

              {/* FORMULA BHARATH */}
              <div className={navContainerClass}>
                <NavLink
                  className={navLinkClass}
                  to={`${url}/FormulaBharath`}
                  id="blogs-navbar-FormulaBharath"
                >
                  <div>FORMULA BHARATH</div>
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BlogsNavbar;
