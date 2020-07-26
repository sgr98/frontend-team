import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AchievementsContainer from '../AchievementsContainer/AchievementsContainer';
import './yearlyTabs.css';

const YearlyTabs = ({ allData }) => {
  var currYear;
  currYear = new Date().getFullYear();
  const [key, setKey] = useState(`${currYear}`);
  var array = Object.keys(allData);
  array.sort();
  const min = parseInt(array[0]);
  const max = parseInt(array[array.length - 1]);
  var years = [];
  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  var yearlyData = allData[key];
  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
      {years.map((value, index) => {
        return (
          <Tab
            eventKey={value}
            key={'year-tab-' + value}
            title={value}
            disabled={array.indexOf(`${value}`) == -1}
          >
            <AchievementsContainer achievementsData={yearlyData} year={value} />
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default YearlyTabs;
