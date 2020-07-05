import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './TechManiacsDropDown.css';
import DropdownIcon from './DropdownIcon.png';

export class TechManiacsDropDown extends Component {
  render() {
    return (
      <div className="nav-container-TechManiacsDropDown">
        <NavDropdown
          className="nav-dropdown-TechManiacsDropDown"
          href="#techamaniacs-dropdown"
          title={
            <span>
              Techmaniacs
              <img
                src={DropdownIcon}
                alt="DropdownIcon"
                style={{ height: '0.4em', margin: '0 0 3px 9px' }}
              />
            </span>
          }
          id="collasible-nav-dropdown-TechManiacsDropDown"
        >
          <NavDropdown.Item
            href="#general"
            className="menuitem-TechManiacsDropDown"
          >
            General
          </NavDropdown.Item>

          <NavDropdown.Item
            href="#techmaniacs"
            className="menuitem-TechManiacsDropDown"
          >
            Techmaniacs
          </NavDropdown.Item>

          <NavDropdown.Item
            href="#digital-wizards"
            className="menuitem-TechManiacsDropDown"
          >
            Digital Wizards
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#gagan-vedhi"
            className="menuitem-TechManiacsDropDown"
          >
            Gagan Vedhi
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#3d-printing"
            className="menuitem-TechManiacsDropDown"
          >
            3D Printing
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  }
}

export default TechManiacsDropDown;
