import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChallengesContainer.css';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import ChallengesDropdown from './ChallengesDropdown/ChallengesDropdown';

const ChallengesContainer = () => {
  return (
    <div className="root-ChallengesContainer">
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
    </div>
  );
};

export default ChallengesContainer;
