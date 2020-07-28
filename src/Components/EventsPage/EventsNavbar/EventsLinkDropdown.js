import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import './EventsLinkDropdown.css';
import DropdownIcon from '../../BlogsPage/SearchBar/DropdownIcon.png';

const EventsLinkDropdown = ({ url, currentSelected }) => {
  return (
    <div className="main-container-EventsDropContainer">
      <NavDropdown
        className="nav-dropdown-EventsDropDown"
        href="#all-events"
        title={
          <div>
            <span>
              {currentSelected}
              <img
                src={DropdownIcon}
                alt="DropdownIcon"
                style={{ height: '0.5em', margin: '0 0 3px 9px' }}
              />
            </span>
          </div>
        }
        id="collasible-nav-dropdown-EventsDropDown"
      >
        <NavDropdown.Item
          as={Link}
          to={`${url}/AllEvents`}
          className="menuitem-EventsDropDown"
          id="AllEvents-EventsNavDropdown"
        >
          <div>All Events</div>
        </NavDropdown.Item>

        <NavDropdown.Item
          as={Link}
          to={`${url}/Workshops`}
          className="menuitem-EventsDropDown"
        >
          Workshops
        </NavDropdown.Item>

        <NavDropdown.Item
          as={Link}
          to={`${url}/Talks`}
          className="menuitem-EventsDropDown"
        >
          talks
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to={`${url}/Activities`}
          className="menuitem-EventsDropDown"
        >
          Activities
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to={`${url}/Competitions`}
          className="menuitem-EventsDropDown"
        >
          Competitions
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default EventsLinkDropdown;
