import React, { Component } from 'react';
import './LimeLightZone.css';
import RightTeamCard from './RightTeamCard/RightTeamCard';
import LeftTeamCard from './LeftTeamCard/LeftTeamCard';
import CustomHR from '../../CustomHR/CustomHR';
import CollegeTeams from './CollegeTeams/CollegeTeams';

class LimeLightZone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RightTeamCard />
        <CustomHR />
        <LeftTeamCard />
        <CustomHR />
        <CollegeTeams />
      </div>
    );
  }
}

export default LimeLightZone;
