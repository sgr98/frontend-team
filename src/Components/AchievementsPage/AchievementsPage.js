import React from 'react';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import YearlyTabs from './yearlyTabs/yearlyTabs';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';
const AchievementsPage = () => {
  return (
    <div>
      <Navigation />
      <yearlyTabs />
      <ProjectFooter />
    </div>
  );
};

export default AchievementsPage;