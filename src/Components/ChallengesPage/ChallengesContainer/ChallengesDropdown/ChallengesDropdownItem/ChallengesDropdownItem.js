import React from 'react';
import './ChallengesDropdownItem.css';

const ChallengesDropdownItem = (props) => {
  return( 

    <div className="dropdown-item-container-ChallengesPage">

      <button type="button" className="dropdown-item-button-ChallengesPage" id="mechanical-dropdown-ChallengesPage">
        <div className="dropdown-item-title-ChallengesPage">
          <div>Mechanical</div>
        </div>
      </button>

      <button type="button" className="dropdown-item-button-ChallengesPage" id="electrical-dropdown-ChallengesPage">
        <div className="dropdown-item-title-ChallengesPage">
          <div>Electrical</div>
        </div>
      </button>

      <button type="button" className="dropdown-item-button-ChallengesPage" id="computer-dropdown-ChallengesPage">
        <div className="dropdown-item-title-ChallengesPage">
          <div>Computer Science</div>
        </div>
      </button>

      <button type="button" className="dropdown-item-button-ChallengesPage" id="civil-dropdown-ChallengesPage">
        <div className="dropdown-item-title-ChallengesPage">
          <div>Civil</div>
        </div>
      </button>

      <button type="button" className="dropdown-item-button-ChallengesPage" id="chemical-dropdown-ChallengesPage">
        <div className="dropdown-item-title-ChallengesPage">
          <div>Chemical</div>
        </div>
      </button>

    </div>

    );
};

export default ChallengesDropdownItem;
