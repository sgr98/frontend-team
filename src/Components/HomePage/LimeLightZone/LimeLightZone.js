/* eslint-disable no-else-return */
import React, { Component } from 'react';
import './LimeLightZone.css';
import RightTeamCard from './RightTeamCard/RightTeamCard';
import LeftTeamCard from './LeftTeamCard/LeftTeamCard';
import CustomHR from '../../ReusableComponents/CustomHR/CustomHR';

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
        {this.state.blogs.map((blog, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={blog._id}>
                <RightTeamCard
                  remarkText="FEATURED"
                  buttonText="Read Blog"
                  category="blog"
                  data={blog}
                />
                <CustomHR />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={blog._id}>
              <LeftTeamCard
                remarkText="FEATURED"
                buttonText="Read Blog"
                category="blog"
                data={blog}
              />
              <CustomHR />
            </React.Fragment>
          );
        })}
        {this.props.achievements.map((single, index) => {
          if (this.state.blogs.length % 2 === 0) {
            if (index % 2 === 0) {
              return (
                <React.Fragment key={single._id}>
                  <RightTeamCard
                    remarkText="FEATURED ACHIEVEMENT"
                    buttonText="View Images"
                    category="achievement"
                    data={single}
                  />
                  <CustomHR />
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={single._id}>
                <LeftTeamCard
                  remarkText="FEATURED ACHIEVEMENT"
                  buttonText="View Images"
                  category="achievement"
                  data={single}
                />
                <CustomHR />
              </React.Fragment>
            );
          } else {
            if (index % 2 !== 0) {
              return (
                <React.Fragment key={single._id}>
                  <RightTeamCard
                    remarkText="FEATURED ACHIEVEMENT"
                    buttonText="View Images"
                    category="achievement"
                    data={single}
                  />
                  <CustomHR />
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={single._id}>
                <LeftTeamCard
                  remarkText="FEATURED ACHIEVEMENT"
                  buttonText="View Images"
                  category="achievement"
                  data={single}
                />
                <CustomHR />
              </React.Fragment>
            );
          }
        })}

        {/* <RightTeamCard remarkText="UPCOMING" buttonText="EXPLORE MORE" />
        <CustomHR />
        <LeftTeamCard />
        <CustomHR />
        <RightTeamCard remarkText="UPCOMING" buttonText="EXPLORE MORE" />
        <CustomHR /> */}
        {/* <CollegeTeams /> */}
      </div>
    );
  }
}

export default LimeLightZone;
