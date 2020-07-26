import React from 'react';
import './ChallengesContainer.css';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import ChallengesDropdown from './ChallengesDropdown/ChallengesDropdown';

const ChallengesContainer = () => {
  return (
    <div className="root-ChallengesContainer">
      <ChallengesDropdown />
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
      {/* <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard /> */}
    </div>
  );
};

export default ChallengesContainer;
