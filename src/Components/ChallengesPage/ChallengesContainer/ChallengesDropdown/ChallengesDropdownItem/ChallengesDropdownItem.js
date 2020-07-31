import React from 'react';
import { withRouter } from 'react-router-dom';
import './ChallengesDropdownItem.css';

const ChallengesDropdownItem = (props) => {
  const Navigate = () => {
    props.history.push(`${props.name}`);
  };
  return (
    <div className="dropdown-item-container-ChallengesPage">
      <button
        type="button"
        className="dropdown-item-button-ChallengesPage"
        id="mechanical-dropdown-ChallengesPage"
        onClick={Navigate}
      >
        <div className="dropdown-item-title-ChallengesPage">
          <div>{props.name.toUpperCase()}</div>
        </div>
      </button>
    </div>
  );
};

export default withRouter(ChallengesDropdownItem);
