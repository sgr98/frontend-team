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
    this.state = {
      blogs: [],
      achievements: [],
    };
  }

  componentDidMount() {
    this.setState({
      blogs: this.props.blogs,
      achievements: this.props.achievements,
    });
  }

  render() {
    return (
      <div className="LimeLightZone">
        <LimeLightHeading />

        <RightTeamCard remarkText="UPCOMING" buttonText="EXPLORE MORE" />
        <CustomHR />
        <LeftTeamCard />
        <CustomHR />
        <RightTeamCard remarkText="UPCOMING" buttonText="EXPLORE MORE" />
        <CustomHR />
        {/* <CollegeTeams /> */}
      </div>
    );
  }
}

export default LimeLightZone;
