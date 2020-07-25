import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './EventsLinkDropdown.css';
import DropdownIcon from '../../BlogsPage/SearchBar/DropdownIcon.png';

export class EventsLinkDropdown extends Component {

    render() {
        return (
            <div className="main-container-EventsDropContainer">
                <NavDropdown
                    className="nav-dropdown-EventsDropDown"
                    href="#all-events"
                    title={
                        <div><span>
                        All Events
                        <img
                            src={DropdownIcon}
                            alt="DropdownIcon"
                            style={{ height: '0.5em', margin: '0 0 3px 9px' }}
                        />
                        </span></div>
                    }
                    id="collasible-nav-dropdown-EventsDropDown"
                    >
                    <NavDropdown.Item
                        href="#AllEvents"
                        className="menuitem-EventsDropDown"
                        id="AllEvents-EventsNavDropdown"
                    >
                        <div>All Events</div>
                    </NavDropdown.Item>

                    <NavDropdown.Item
                        href="#Workshops"
                        className="menuitem-EventsDropDown"
                    >
                        Workshops
                    </NavDropdown.Item>

                    <NavDropdown.Item
                        href="#Talks"
                        className="menuitem-EventsDropDown"
                    >
                        talks
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#Activities"
                        className="menuitem-EventsDropDown"
                    >
                        Activities
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#Competitions"
                        className="menuitem-EventsDropDown"
                    >
                        Competitions
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#CalendarEvents"
                        className="menuitem-EventsDropDown"
                        id="CalendarEvents-EventsNavDropdown"
                    >
                        <div>Calendar Events</div>
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        );
    }

}

export default EventsLinkDropdown;