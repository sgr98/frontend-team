/* eslint-disable indent */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './TechManiacsDropDown.css';
import DropdownIcon from './DropdownIcon.png';

const TechManiacsDropDown = (props) => {
  const [clubNames, setClubNames] = useState([]);
  const [currentSelected, setCurrentSelected] = useState('GENERAL');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/front/clubs`).then((res) => {
      setClubNames(res.data);
    });
  }, []);

  const onClickHandler = (name) => {
    setCurrentSelected(name);
  };

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
        <NavDropdown.Item className="menuitem-TechManiacsDropDown">
          <NavLink to={`${props.url}/general`}>GENERAL</NavLink>
        </NavDropdown.Item>

        {clubNames.length !== 0
          ? clubNames.map(({ name }, index) => {
              return (
                <NavDropdown.Item
                  className="menuitem-TechManiacsDropDown"
                  key={name + index}
                  onClick={() => {
                    onClickHandler(name);
                  }}
                >
                  <NavLink to={`${props.url}/${name.toLowerCase()}`}>
                    {name}
                  </NavLink>
                </NavDropdown.Item>
              );
            })
          : null}
      </NavDropdown>
    </div>
  );
};

export default TechManiacsDropDown;
