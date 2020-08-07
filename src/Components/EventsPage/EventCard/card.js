import React, { useState } from 'react';
import './card.css';
import axios from 'axios';
import { Modal, Button, Toast } from 'react-bootstrap';
import CustomHR from '../../ReusableComponents/CustomHR/CustomHR';
import parse from 'html-react-parser';
import EmailIcon from './emailIcon.png';

const Card = ({ single, showButton }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [errorText, setErrorText] = useState('Some Error Occurred');

  const toggleShowSuccess = () => setShowSuccess(!showSuccess);
  const toggleShowFailure = () => setShowFailure(!showFailure);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/front/register/${single._id}`, {
        email,
      })
      .then((res) => {
        console.log(res);
        if (res.data.toLowerCase() === 'subscribed') {
          setShow(false);
          setShowSuccess(true);
        } else {
          setShow(false);
          setErrorText('You are already registered!!');
          setShowFailure(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShow(false);
        setShowFailure(true);
      });
  };

  return (
    <>
      <div className="event-card-container">
        <div className="event-card-content">
          <div className="event-card-content-overlay" />
          <img
            className="event-card-content-image"
            alt="Event-Poster"
            src={
              single.poster_url.length === 1
                ? 'https://images.unsplash.com/photo-1503560683205-acf61ac68a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                : `${process.env.REACT_APP_BASE_URL}/images/${single.poster_url}`
            }
            // src={`${single.poster_url}`}
          />
          <div className="event-card-content-details">
            <p className="event-card-title">{single.name}</p>
            <span className="event-card-topic">
              Category: {single.categories}
            </span>

            {/* <div className="event-card-description"> */}
            {/* <ReadMoreReact
              // Slice is used here to remove <p> tags
              text={single.description.slice(3, -6)}
              max={270}
              ideal={260}
              readMoreText="Read More"
            /> */}

            {/* {parse(single.description)} */}
            {/* </div> */}
            <div className="event-card-date-location">
              <span>{single.date}</span>
              <span>
                {single.venue} - {single.time}
              </span>
            </div>

            <div className="event-card-btn-container">
              <Button
                variant="outline"
                className="event-card-btn"
                onClick={handleShow}
              >
                VIEW FULL DETAILS
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="Event-Modal">
        <Modal.Header closeButton>
          <Modal.Title>{single.name}</Modal.Title>
        </Modal.Header>
        <CustomHR />
        <Modal.Body>
          <div className="EventModalBody">
            <div className="EventDetails-EventModal">
              <div>
                <p className="secondaryHeading-EventModal">
                  CATEGORY: {single.categories.toUpperCase()}
                </p>

                <p className="secondaryHeading-EventModal">
                  PRIZE: Certificate and exciting goodies
                </p>
              </div>
              <div>
                <p className="secondaryHeading-EventModal">{single.date} </p>
                <p className="secondaryHeading-EventModal">
                  {single.venue} - {single.time}
                </p>
              </div>
            </div>

            <div className="description-EventModal">
              {parse(single.description)}
            </div>

            {showButton ? (
              <div className="emailInput-EventModal">
                <label htmlFor="email">EMAIL-ID</label>
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder=" Enter your .iittp.ac.in mail id"
                    onChange={onChangeHandler}
                  />
                  <img src={EmailIcon} alt="email" />
                </div>
              </div>
            ) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {showButton ? (
            <Button
              variant="secondary"
              className="RegisterButton-EventModal"
              onClick={onSubmitHandler}
            >
              REGISTER
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>

      <Toast
        animation
        autohide
        show={showSuccess}
        onClose={toggleShowSuccess}
        className="EventToast"
        style={{
          position: 'fixed',
          top: '100px',
          right: '50px',
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Successful Registration</strong>
        </Toast.Header>
      </Toast>

      <Toast
        animation
        autohide
        show={showFailure}
        onClose={toggleShowFailure}
        className="EventToast failureEvent"
        style={{
          position: 'fixed',
          top: '100px',
          right: '50px',
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">{errorText}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

export default Card;
