import React from 'react';
import './RightTeamCard.css';
import CustomButton from '../CustomButton/CustomButton';

const RightTeamCard = (props) => {
  return (
    <div className="root-RightTeamCard">
      <div className="imageDiv-RightTeamCard">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1529178983631-23b852df9092?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          alt="Poster"
        />
      </div>
      <div className="content_div-RightTeamCard">
        <p className="heading-RightTeamCard">Featured Achievements</p>
        <p className="secondary-heading-RightTeamCard">
          By Professors and Students
        </p>
        <p className="description-RightTeamCard">
          Entrepreneurship Cell IIT Madras makes the entrepreneurial world
          accessible to all group of people part of the IIT Madras ecosystem,
          cater the audience from startup enthusiast to hardcore entrepreneurs,
          with plethora of yearlong events like Conclaves, Keynotes,
          Industry-defined Problems, B-Planning Competitions and Workshops,
          through both personal and collaboration-based approach
        </p>
        <div className="button-RightTeamCard">
          <CustomButton text="Explore more" />
        </div>
      </div>
    </div>
  );
};

export default RightTeamCard;
