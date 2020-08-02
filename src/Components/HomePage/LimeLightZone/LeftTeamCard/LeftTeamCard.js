/* eslint-disable no-nested-ternary */
import React from 'react';
import parse from 'html-react-parser';
import ReadMoreReact from 'read-more-react';
import Remark from '../../../ReusableComponents/Remark/Remark';
import './LeftTeamCard.css';
import CustomButton from '../CustomButton/CustomButton';

const LeftTeamCard = (props) => {
  let image_url = '';

  if (props.category === 'blog') {
    image_url = `${process.env.REACT_APP_BASE_URL}/images/${props.data.gallery[0]}`;
  } else {
    image_url = `${process.env.REACT_APP_BASE_URL}/images/${props.data.pics_url[0]}`;
  }
  return (
    <>
      <div className="root-LeftTeamCard">
        <div className="content_div-LeftTeamCard">
          <Remark text={props.remarkText} />
          <p className="heading-LeftTeamCard">{props.data.title}</p>
          {props.data.creator ? (
            <p className="secondary-heading-LeftTeamCard">
              By {props.data.creator}
            </p>
          ) : null}
          <div className="description-LeftTeamCard-parent">
            {props.data.extract ? (
              <div className="description-LeftTeamCard">
                <ReadMoreReact
                  text={props.data.extract}
                  max={550}
                  ideal={480}
                  readMoreText="Read More"
                />
              </div>
            ) : props.data.description ? (
              <div className="description-LeftTeamCard">
                {parse(props.data.description)}
              </div>
            ) : null}
          </div>
          <div className="button-LeftTeamCard">
            <CustomButton text={props.buttonText} />
          </div>
        </div>
        <div className="imageDiv-LeftTeamCard">
          <img className="d-block w-100" src={image_url} alt="Poster" />
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
          {
            //  Same class as rightTeamCard is given because they look same in mobile version.
          }
          <p className="description-RightTeamCard-Mobile">
            {props.data.extract
              ? props.data.extract
              : parse(props.data.description)}
          </p>
          <div className="button-RightTeamCard-Mobile">
            <CustomButton text={props.data.buttonText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftTeamCard;
