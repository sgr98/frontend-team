/* eslint-disable indent */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TechManiacsDropDown.css';
import DropdownIcon from './DropdownIcon.png';

const TechManiacsDropDown = (props) => {
  const [clubNames, setClubNames] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/front/clubs`).then((res) => {
      setClubNames(res.data);
    });
  }, []);

  return (
    <div className="nav-container-TechManiacsDropDown">
      <NavDropdown
        className="nav-dropdown-TechManiacsDropDown"
        title={
          <span>
            {props.currentSelected}
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
          as={Link}
          to={`${props.url}/general`}
          className="menuitem-TechManiacsDropDown"
        >
          GENERAL
        </NavDropdown.Item>

        {clubNames.length !== 0
          ? clubNames.map(({ name }, index) => {
              return (
                <NavDropdown.Item
                  className="menuitem-TechManiacsDropDown"
                  key={name + index}
                  as={Link}
                  to={`${props.url}/${name.toLowerCase()}`}
                >
                  {name}
                </NavDropdown.Item>
              );
            })
          : null}
      </NavDropdown>
    </div>
  );
};

export default TechManiacsDropDown;
