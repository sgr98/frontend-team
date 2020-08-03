/* eslint-disable no-nested-ternary */
import React from 'react';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import ReadMoreReact from 'read-more-react';
import Remark from '../../../ReusableComponents/Remark/Remark';
import './LeftTeamCard.css';
import CustomButton from '../CustomButton/CustomButton';

const LeftTeamCard = (props) => {
  const cardData = {
    title: '',
    image_url: '',
    subHeading: '',
    descriptionComponent: null,
    mobileDescriptionComponent: null,
    onClickHandler: null,
  };

  switch (props.category) {
    case 'blog': {
      cardData.title = props.data.title;
      cardData.image_url = `${process.env.REACT_APP_BASE_URL}/images/${props.data.gallery[0]}`;
      cardData.subHeading = props.data.creator
        ? `By ${props.data.creator}`
        : '';
      cardData.descriptionComponent = props.data.extract ? (
        <ReadMoreReact
          text={props.data.extract}
          max={550}
          ideal={480}
          readMoreText="Read More"
        />
      ) : null;
      cardData.descriptionComponent = props.data.extract
        ? props.data.extract
        : null;

      cardData.onClickHandler = () => {
        props.history.push(`/blogs/${props.data._id}`);
      };
      break;
    }
    case 'achievement': {
      cardData.title = props.data.title;
      cardData.image_url = `${process.env.REACT_APP_BASE_URL}/images/${props.data.pics_url[0]}`;
      cardData.subHeading = '';
      cardData.descriptionComponent = parse(props.data.description);
      cardData.descriptionComponent = parse(props.data.description);
      break;
    }
    case 'event': {
    }
    default: {
    }
  }
  return (
    <>
      <div className="root-LeftTeamCard">
        <div className="content_div-LeftTeamCard">
          <Remark text={props.remarkText} />
          <p className="heading-LeftTeamCard">{cardData.title}</p>

          <p className="secondary-heading-LeftTeamCard">
            {cardData.subHeading}
          </p>

          <div className="description-LeftTeamCard-parent">
            <div className="description-LeftTeamCard">
              {cardData.descriptionComponent}
            </div>
          </div>
          <div className="button-LeftTeamCard">
            <CustomButton
              text={props.buttonText}
              onClickHandler={cardData.onClickHandler}
            />
          </div>
        </div>
        <div className="imageDiv-LeftTeamCard">
          <img
            className="d-block w-100"
            src={cardData.image_url}
            alt="Poster"
          />
        </div>
      </div>
      <div className="root-RightTeamCard-Mobile">
        <div className="content_div-RightTeamCard-Mobile">
          <p className="heading-RightTeamCard-Mobile">{cardData.title}</p>

          <p className="secondary-heading-RightTeamCard-Mobile">
            {cardData.subHeading}
          </p>
        </div>
        <div className="imageDiv-RightTeamCard-Mobile">
          <img
            className="d-block w-100"
            src={cardData.image_url}
            alt="Poster"
          />
        </div>
        <div className="content_div-RightTeamCard-Mobile">
          {
            //  Same class as rightTeamCard is given because they look same in mobile version.
          }
          <div className="description-RightTeamCard-Mobile">
            {cardData.mobileDescriptionComponent}
          </div>
          <div className="button-RightTeamCard-Mobile">
            <CustomButton
              onClickHandler={cardData.onClickHandler}
              text={props.buttonText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(LeftTeamCard);
