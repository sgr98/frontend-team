import React from 'react';
import './LeftTeamCard.css';
import CustomButton from '../CustomButton/CustomButton';

const LeftTeamCard = (props) => {
  return (
    <div className="root-LeftTeamCard">
      <div className="content_div-LeftTeamCard">
        <p className="heading-LeftTeamCard">Articles & Activities</p>
        <p className="secondary-heading-LeftTeamCard">
          Writer or the theme of the activity/ article
        </p>
        <p className="description-LeftTeamCard">
          Entrepreneurship Cell IIT Madras makes the entrepreneurial world
          accessible to all group of people part of the IIT Madras ecosystem,
          cater the audience from startup enthusiast to hardcore entrepreneurs,
          with plethora of yearlong events like Conclaves, Keynotes,
          Industry-defined Problems, B-Planning Competitions and Workshops,
          through both personal and collaboration-based approach
        </p>
        <div className="button-LeftTeamCard">
          <CustomButton text="Explore more" />
        </div>
      </div>
      <div className="imageDiv-LeftTeamCard">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1591442650679-e778e045220b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="Poster"
        />
      </div>
    </div>
  );
};

export default LeftTeamCard;
