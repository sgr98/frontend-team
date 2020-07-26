import React, { useState, useEffect } from 'react';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import YearlyTabs from './yearlyTabs/yearlyTabs';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';
import './AchievementsPage.css';

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/achievements/all`)
      .then((res) => {
        setAchievements(res.data);
      });
  }, []);
  return (
    <div className="mainContainer">
      <Navigation />
      <YearlyTabs allData={achievements}/>
      <ProjectFooter />
    </div>
  );
};

export default AchievementsPage;