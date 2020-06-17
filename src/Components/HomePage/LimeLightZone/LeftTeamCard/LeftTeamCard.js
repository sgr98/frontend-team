import React from 'react';
import ReadMoreReact from 'read-more-react';
import './LeftTeamCard.css';
import CustomButton from '../CustomButton/CustomButton';

const LeftTeamCard = (props) => {
  return (
    <>
      <div className="root-LeftTeamCard">
        <div className="content_div-LeftTeamCard">
          <p className="heading-LeftTeamCard">Articles & Activities</p>
          <p className="secondary-heading-LeftTeamCard">
            Writer or the theme of the activity/ article
          </p>
          <div className="description-LeftTeamCard-parent">
            <div className="description-LeftTeamCard">
              <ReadMoreReact
                text=" Entrepreneurship Cell IIT Madras makes the entrepreneurial world accessible to all group of people part of the IIT Madras ecosystem, cater the audience from startup enthusiast to hardcore entrepreneurs, with plethora of yearlong events like Conclaves, Keynotes, Industry-defined Problems, B-Planning Competitions and Workshops, through both personal and collaboration-based approach "
                max={550}
                ideal={480}
                readMoreText="Read More"
              />
            </div>
          </div>
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
      <div className="root-RightTeamCard-Mobile">
        <div className="content_div-RightTeamCard-Mobile">
          <p className="heading-RightTeamCard-Mobile">Articles & Activities</p>
          <p className="secondary-heading-RightTeamCard-Mobile">
            Writer or the theme of the activity/ article
          </p>
        </div>
        <div className="imageDiv-RightTeamCard-Mobile">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1591442650679-e778e045220b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="Poster"
          />
        </div>
        <div className="content_div-RightTeamCard-Mobile">
          {
            //  Same class as rightTeamCard is given because they look same in mobile version.
          }
          <p className="description-RightTeamCard-Mobile">
            Entrepreneurship Cell IIT Madras makes the entrepreneurial world
            accessible to all group of people part of the IIT Madras ecosystem,
            cater the audience from startup enthusiast to hardcore
            entrepreneurs, with plethora of yearlong events like Conclaves,
            Keynotes, Industry-defined Problems, B-Planning Competitions and
            Workshops, through both personal and collaboration-based approach
          </p>
          <div className="button-RightTeamCard-Mobile">
            <CustomButton text="Explore more" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftTeamCard;
