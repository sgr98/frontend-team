import React from 'react';
import './ChallengesPage.css';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ChallengesContainer from './ChallengesContainer/ChallengesContainer';

const ChallengesPage = () => {
  return (
    <div>
      <Navigation />
      <div className="ChallengesPage">
        <ChallengesContainer />
        <ChallengesContainer />
        <ChallengesContainer />
        <ChallengesContainer />
      </div>

      <ProjectFooter />
    </div>
  );
};

export default ChallengesPage;
