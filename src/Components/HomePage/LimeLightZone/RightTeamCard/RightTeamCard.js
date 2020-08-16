/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import ReadMoreReact from 'read-more-react';
import Remark from '../../../ReusableComponents/Remark/Remark';
import './RightTeamCard.css';
import CustomHR from '../../../ReusableComponents/CustomHR/CustomHR';
import { Modal, Carousel } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import EventCustomButton from '../CustomButton/EventCustomButton';

const RightTeamCard = (props) => {
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (gallery_a) => {
    setGallery(gallery_a);
    setShow(true);
  };
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
      cardData.image_url =
        props.data.gallery.length !== 0
          ? `${process.env.REACT_APP_BASE_URL}/images/${props.data.gallery[0]}`
          : 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80';
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
      cardData.mobileDescriptionComponent = props.data.extract
        ? props.data.extract
        : null;
      cardData.onClickHandler = () => {
        props.history.push(`/blogs/${props.data._id}`);
      };
      break;
    }
    case 'achievement': {
      cardData.title = props.data.title;
      cardData.image_url =
        props.data.pics_url.length !== 0
          ? `${process.env.REACT_APP_BASE_URL}/images/${props.data.pics_url[0]}`
          : 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1562&q=80';
      cardData.subHeading = '';
      cardData.descriptionComponent = parse(props.data.description);
      cardData.mobileDescriptionComponent = parse(props.data.description);
      cardData.onClickHandler = () => {
        handleShow(props.data.pics_url);
      };
      break;
    }
    case 'event': {
      cardData.title = props.data.name;
      cardData.image_url =
        props.data.poster_url.trim().length !== 0
          ? `${process.env.REACT_APP_BASE_URL}/images/${props.data.poster_url}`
          : 'https://images.unsplash.com/photo-1468259275383-c4f1b88d5772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
      cardData.subHeading = '';
      cardData.descriptionComponent = parse(props.data.description);
      cardData.mobileDescriptionComponent = parse(props.data.description);

      break;
    }
    default: {
      break;
    }
  }

  return (
    <>
      <Modal size="xl" show={show} onHide={handleClose} className="achievements-Modal">
        <Modal.Header closeButton>
          <Modal.Title>Achievement Highlights</Modal.Title>
        </Modal.Header>
        <CustomHR />
        <Modal.Body>
          <Carousel>
            {gallery.map((single, index) => (
              <Carousel.Item key={'Car' + index}>
                <img
                  className="img-fluid"
                  src={`${process.env.REACT_APP_BASE_URL}/images/${single}`}
                  alt={'Highlights Pic#' + index}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
      <div className="root-RightTeamCard">
        <div className="imageDiv-RightTeamCard">
          <img
            className="d-block w-100"
            src={cardData.image_url}
            alt="Poster"
          />
        </div>
        <div className="content_div-RightTeamCard">
          <Remark text={props.remarkText} />
          <p className="heading-RightTeamCard">{cardData.title}</p>

          <p className="secondary-heading-RightTeamCard">
            {cardData.subHeading}
          </p>

          <div className="description-RightTeamCard">
            {cardData.descriptionComponent}
          </div>

          <div className="button-RightTeamCard">
            {props.category !== 'event' ? (
              <CustomButton
                text={props.buttonText}
                onClickHandler={cardData.onClickHandler}
              />
            ) : (
              <EventCustomButton text={props.buttonText} single={props.data} />
            )}
          </div>
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
          <div className="description-RightTeamCard-Mobile">
            {cardData.mobileDescriptionComponent}
          </div>
          <div className="button-RightTeamCard-Mobile">
            {props.category !== 'event' ? (
              <CustomButton
                text={props.buttonText}
                onClickHandler={cardData.onClickHandler}
              />
            ) : (
              <EventCustomButton text={props.buttonText} single={props.data} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(RightTeamCard);
