import React, { useState, useEffect } from 'react';
import { Tabs,Tab } from 'react-bootstrap';
import AchievementsContainer from '../AchievementsContainer/AchievementsContainer';
import './yearlyTabs.css';

const YearlyTabs = ({
  allData={}
}) => {
    const currYear=new Date().getFullYear()
    const [key, setKey] = useState(`${currYear}`);
    let years=[]
    var yearlyData=allData[key]
    // for rolling 5 years
    // for (var i = 0; i <= 4; i++) {
    //   years.push(toString(currYear-i));
    // }
    return (
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {years.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
        <Tab eventKey="2020" title="2020">
          <AchievementsContainer achievementsData={yearlyData}  />
        </Tab>
        <Tab eventKey="2019" title="2019" disabled>
          <AchievementsContainer achievementsData={yearlyData}/>
        </Tab>
      </Tabs>
    );
  }
  
  export default YearlyTabs;