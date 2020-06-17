import React from 'react';
import ReadMoreReact from 'read-more-react';
import './RightTeamCard.css';

import CustomButton from '../CustomButton/CustomButton';

const RightTeamCard = (props) => (
  <>
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
        <div className="description-RightTeamCard">
          <ReadMoreReact
            text=" Entrepreneurship Cell IIT Madras makes the entrepreneurial world accessible to all group of people part of the IIT Madras ecosystem, cater the audience from startup enthusiast to hardcore entrepreneurs, with plethora of yearlong events like Conclaves, Keynotes, Industry-defined Problems, B-Planning Competitions and Workshops, through both personal and collaboration-based approach cccccccccccc cfskvnfksnvfsnvfjknvjkfdnvk cfskvnfksnvfsnvfjknvjkfdnvk cfskvnfksnvfsnvfjknvjkfdnvk"
            max={550}
            ideal={480}
            readMoreText="Read More"
          />
        </div>
        <div className="button-RightTeamCard">
          <CustomButton text="Explore more" />
        </div>
      </div>
    </div>

    <div className="root-RightTeamCard-Mobile">
      <div className="content_div-RightTeamCard-Mobile">
        <p className="heading-RightTeamCard-Mobile">Featured Achievements</p>
        <p className="secondary-heading-RightTeamCard-Mobile">
          By Professors and Students
        </p>
      </div>
      <div className="imageDiv-RightTeamCard-Mobile">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1529178983631-23b852df9092?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          alt="Poster"
        />
      </div>
      <div className="content_div-RightTeamCard-Mobile">
        <p className="description-RightTeamCard-Mobile">
          Entrepreneurship Cell IIT Madras makes the entrepreneurial world
          accessible to all group of people part of the IIT Madras ecosystem,
          cater the audience from startup enthusiast to hardcore entrepreneurs,
          with plethora of yearlong events like Conclaves, Keynotes,
          Industry-defined Problems, B-Planning Competitions and Workshops,
          through both personal and collaboration-based approach like Conclaves,
          Keynotes, Industry-defined Problems, B-Planning Competitions and
          Workshops, through both personal and collaboration-based approach like
          Conclaves, Keynotes, Industry-defined Problems, B-Planning
          Competitions and Workshops, through both personal and
          collaboration-based approach
        </p>
        <div className="button-RightTeamCard-Mobile">
          <CustomButton text="Explore more" />
        </div>
      </div>
    </div>
  </>
);

export default RightTeamCard;
