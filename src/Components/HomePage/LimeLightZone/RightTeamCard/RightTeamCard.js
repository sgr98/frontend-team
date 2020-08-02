/* eslint-disable no-nested-ternary */
import React from 'react';
import parse from 'html-react-parser';
import ReadMoreReact from 'read-more-react';
import Remark from '../../../ReusableComponents/Remark/Remark';
import './RightTeamCard.css';

import CustomButton from '../CustomButton/CustomButton';

const RightTeamCard = (props) => {
  let image_url = '';

  if (props.category === 'blog') {
    image_url = `${process.env.REACT_APP_BASE_URL}/images/${props.data.gallery[0]}`;
  } else {
    image_url = `${process.env.REACT_APP_BASE_URL}/images/${props.data.pics_url[0]}`;
  }

  return (
    <>
      <div className="root-RightTeamCard">
        <div className="imageDiv-RightTeamCard">
          <img className="d-block w-100" src={image_url} alt="Poster" />
        </div>
        <div className="content_div-RightTeamCard">
          <Remark text={props.remarkText} />
          <p className="heading-RightTeamCard">{props.data.title}</p>
          {props.data.creator ? (
            <p className="secondary-heading-RightTeamCard">
              By {props.data.creator}
            </p>
          ) : null}
          {props.data.extract ? (
            <div className="description-RightTeamCard">
              <ReadMoreReact
                text={props.data.extract}
                max={550}
                ideal={480}
                readMoreText="Read More"
              />
            </div>
          ) : props.data.description ? (
            <div className="description-RightTeamCard">
              {parse(props.data.description)}
            </div>
          ) : null}
          <div className="button-RightTeamCard">
            <CustomButton text={props.buttonText} />
          </div>
        </div>
      </div>

      <div className="root-RightTeamCard-Mobile">
        <div className="content_div-RightTeamCard-Mobile">
          <p className="heading-RightTeamCard-Mobile">{props.data.title}</p>
          {props.data.creator ? (
            <p className="secondary-heading-RightTeamCard-Mobile">
              By {props.data.creator}
            </p>
          ) : null}
        </div>
        <div className="imageDiv-RightTeamCard-Mobile">
          <img className="d-block w-100" src={image_url} alt="Poster" />
        </div>
        <div className="content_div-RightTeamCard-Mobile">
          <p className="description-RightTeamCard-Mobile">
            {props.data.extract ? props.data.extract : null}
          </p>
          <div className="button-RightTeamCard-Mobile">
            <CustomButton text={props.buttonText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightTeamCard;
