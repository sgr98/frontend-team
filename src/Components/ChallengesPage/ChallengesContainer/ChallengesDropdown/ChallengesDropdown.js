/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import ChallengesDropdownItem from './ChallengesDropdownItem/ChallengesDropdownItem';
import './ChallengesDropdown.css';
import dropdownIconChallenges from './dropdownIconChallenges.png';

const ChallengesDropdown = ({ categoryNames, match }) => {
  const [currentCategory, setCurrentCategory] = useState('ALL');

  useEffect(() => {
    console.log(match);
    setCurrentCategory(match.params.category.toUpperCase());
  }, [match.params.category]);

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
          <div>
            {currentCategory}

            <img src={dropdownIconChallenges} alt="Drop Icon" />
          </div>
        </div>
      </button>
    </div>
  ));
  return (
    <div className="containerDropdown-ChallengesPage">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} />

        <Dropdown.Menu className="dropdown-item-main-container-ChallengesPage">
          {categoryNames.map((name, index) => (
            <Dropdown.Item
              as={ChallengesDropdownItem}
              name={name}
              eventKey={index + 1}
              key={name}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default withRouter(ChallengesDropdown);
