/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ChallengesDropdownItem from './ChallengesDropdownItem/ChallengesDropdownItem';
import './ChallengesDropdown.css';
import { Dropdown } from 'react-bootstrap';
import dropdownIconChallenges from './dropdownIconChallenges.png';

const ChallengesDropdown = () => {
  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdownSelected-ChallengesDropdown"
    >
      <button type="button">
        <div className="dropdown-title-box-ChallengesDropdown">
          <div>MECHATRONICS <img src={dropdownIconChallenges} alt="Drop Icon" /></div>
        </div>
      </button>
    </div>
  ));
  return (
    <div className="containerDropdown-ChallengesPage">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} />

        <Dropdown.Menu className="dropdown-item-main-container-ChallengesPage">

          <Dropdown.Item as={ChallengesDropdownItem} eventKey={1}>
            MECHANICAL
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ChallengesDropdown;
