import React, { useState, useEffect } from 'react';
import { Tabs,Tab } from 'react-bootstrap';
import AchievementsContainer from '../AchievementsContainer/AchievementsContainer';
import './yearlyTabs.css';

const YearlyTabs = ({
  allData=[]
}) => {
    const currYear=new Date().getFullYear()
    const [key, setKey] = useState(`${currYear}`);
    let years=[]
    var yearlyData=allData
    return (
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {years.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
        <Tab eventKey="home" title="Home">
          <AchievementsContainer achievementsData={yearlyData}  />
        </Tab>
        {/* <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab> */}
      </Tabs>
    );
  }
  
  export default YearlyTabs;