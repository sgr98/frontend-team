import React from 'react';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import AchievementsContainer from './AchievementsContainer/AchievementsContainer';
import Navigation from '../Navigation/Navigation';

const AchievementsPage = () => {
  return (
    <div>
      <Navigation />
      <AchievementsContainer />
      <ProjectFooter />
    </div>
  );
};

export default AchievementsPage;