import React, { useState, useEffect } from 'react';
import { Tabs } from 'react-bootstrap';
import './yearlyTabs.css';

function yearlyTabs() {
    const currYear=new Date().getFullYear()
    const [key, setKey] = useState(`${currYear}`);
    let years=[]
    for (var i = 2016; i <= currYear; i++) {
        years.push(str(i));
    }
    return (
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {years.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    );
  }
  
  render(<yearlyTabs />);