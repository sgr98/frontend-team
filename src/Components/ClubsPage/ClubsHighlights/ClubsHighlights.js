import React from 'react';
import HighlightsHeading from './HighlightsHeading/HighlightsHeading';
import RightTeamCard from '../../HomePage/LimeLightZone/RightTeamCard/RightTeamCard';
import CustomHR from '../../ReusableComponents/CustomHR/CustomHR';

const ClubsHighlights = () => {
  return (
    <div>
      <HighlightsHeading />
      {/*
            Right team Card is same as the one in Home's Page. The RightTeamCard Component is present in
            HomePage Folder.
      */}
      <RightTeamCard remarkText="UPCOMING" buttonText="REGISTER" />
      <CustomHR />
      <RightTeamCard remarkText="PAST" buttonText="EXPLORE MORE" />
      <CustomHR />
      <RightTeamCard remarkText="RESULTS" buttonText="EXPLORE MORE" />
    </div>
  );
};

export default ClubsHighlights;
