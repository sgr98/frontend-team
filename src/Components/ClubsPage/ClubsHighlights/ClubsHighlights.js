import React from 'react';
import HighlightsHeading from './HighlightsHeading/HighlightsHeading';
import RightTeamCard from '../../HomePage/LimeLightZone/RightTeamCard/RightTeamCard';
import CustomHR from '../../ReusableComponents/CustomHR/CustomHR';

const ClubsHighlights = ({ blogs, events }) => {
  return (
    <div>
      <HighlightsHeading />
      {/*
            Right team Card is same as the one in Home's Page. The RightTeamCard Component is present in
            HomePage Folder.
      */}
      {blogs.map((blog) => {
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
      })}
      {events.map((event) => {
        return (
          <React.Fragment key={event._id}>
            <RightTeamCard
              remarkText="EVENT"
              buttonText="Visit Event Page"
              category="event"
              data={event}
            />
            <CustomHR />
          </React.Fragment>
        );
      })}
      {/* <RightTeamCard remarkText="UPCOMING" buttonText="REGISTER" />
      <CustomHR />
      <RightTeamCard remarkText="PAST" buttonText="EXPLORE MORE" />
      <CustomHR />
      <RightTeamCard remarkText="RESULTS" buttonText="EXPLORE MORE" /> */}
    </div>
  );
};

export default ClubsHighlights;
