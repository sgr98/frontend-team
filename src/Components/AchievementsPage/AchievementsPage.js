import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import Loading from '../ReusableComponents/Loading/Loading';
import YearlyTabs from './yearlyTabs/yearlyTabs';
import Navigation from '../Navigation/Navigation';

import './AchievementsPage.css';

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/achievements/all`)
      .then((res) => {
        setLoading(false);
        setAchievements(res.data);
      });
  }, []);
  return (
    <div className="mainContainer">
      <Navigation />
      <Loading show={loading} />
      <YearlyTabs allData={achievements} />
      <ProjectFooter />
    </div>
  );
};

export default AchievementsPage;
