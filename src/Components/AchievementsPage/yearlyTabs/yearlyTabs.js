import React, { useState, useEffect } from 'react';
import { Tabs,Tab } from 'react-bootstrap';
import AchievementsContainer from '../AchievementsContainer/AchievementsContainer';
import './yearlyTabs.css';

const YearlyTabs = ({
  allData={}
}) => {
    const currYear=new Date().getFullYear()
    const [key, setKey] = useState(`${currYear}`);
    let array=Object.keys(allData)
    array.sort()
    const min = parseInt(array[0])
    const max = parseInt(array[array.length-1])
    var yearlyData=allData[key]
    var years=[]
    // for rolling 5 years
    for (var i = min; i <= max; i++) {
      years.push(i);
    }
    return (
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {years.map((value, index) => {
            return (
              <Tab eventKey={value} key={"year-tab-"+value} title={value} disabled={array.indexOf(value)!=-1}>
              <AchievementsContainer achievementsData={yearlyData}  />
              </Tab>
            )
        })}
      </Tabs>
    );
  }
  
  export default YearlyTabs;