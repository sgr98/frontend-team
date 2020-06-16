import React, { Component } from 'react';
import './LimeLightZone.css';
import RightTeamCard from './RightTeamCard/RightTeamCard';
import LeftTeamCard from './LeftTeamCard/LeftTeamCard';
import CustomHR from '../../ReusableComponents/CustomHR/CustomHR';
import CollegeTeams from './CollegeTeams/CollegeTeams';
import LimeLightHeading from './LimeLightHeading/LimeLightHeading';

class LimeLightZone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="LimeLightZone">
        <LimeLightHeading />
        <RightTeamCard />
        <CustomHR />
        <LeftTeamCard />
        <CustomHR />
        <RightTeamCard />
        <CustomHR />
        <CollegeTeams />
      </div>
    );
  }
}

export default LimeLightZone;
