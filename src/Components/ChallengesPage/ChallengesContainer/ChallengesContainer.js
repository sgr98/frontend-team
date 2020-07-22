import React from 'react';
import './ChallengesContainer.css';
import ChallengeCard from './ChallengeCard/ChallengeCard';

const ChallengesContainer = () => {
  return (
    <div className="root-ChallengesContainer">
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      {/* <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard /> */}
    </div>
  );
};

export default ChallengesContainer;
