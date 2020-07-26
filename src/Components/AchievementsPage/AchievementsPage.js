import React from 'react';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import YearlyTabs from './yearlyTabs/yearlyTabs';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';
import './AchievementsPage.css';

const AchievementsPage = () => {
  return (
    <div className="mainContainer">
      <Navigation />
      <yearlyTabs />
      <ProjectFooter />
    </div>
  );
};

export default AchievementsPage;