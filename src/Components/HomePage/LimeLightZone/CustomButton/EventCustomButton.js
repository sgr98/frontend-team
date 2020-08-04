/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import {
  getDateToBeDisplayed,
  covertTimeToIST,
} from '../../../../ReusableFunctions/ReusableFunctions';
import { Modal, Button, Toast } from 'react-bootstrap';
import CustomHR from '../../../ReusableComponents/CustomHR/CustomHR';
import EmailIcon from './emailIcon.png';
import './CustomButton.css';

const EventCustomButton = (props) => {
  /*
    Modal is for registering events
  */
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
  const EventDate = new Date(
    props.single.date.slice(0, props.single.date.indexOf('T'))
  );
  const showButton = () => {
    const currentDay = new Date();

    return EventDate >= currentDay;
  };
  const EventTime = covertTimeToIST(
    props.single.date.slice(
      props.single.date.indexOf('T') + 1,
      props.single.date.indexOf('T') + 6
    )
  );

  const onSubmitHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/front/register/${props.single._id}`,
        {
          email,
        }
      )
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
      {/* This is the button jsx */}
      <div className="border-div-button" onClick={handleShow}>
        <div className="Button-Custom">{props.text}</div>
      </div>

      <Modal show={show} onHide={handleClose} className="Event-Modal">
        <Modal.Header closeButton>
          <Modal.Title>{props.single.name}</Modal.Title>
        </Modal.Header>
        <CustomHR />
        <Modal.Body>
          <div className="EventModalBody">
            <div className="EventDetails-EventModal">
              <div>
                <p className="secondaryHeading-EventModal">
                  CATEGORY: {props.single.categories.toUpperCase()}
                </p>

                <p className="secondaryHeading-EventModal">
                  PRIZE: Certificate and exciting goodies
                </p>
              </div>
              <div>
                <p className="secondaryHeading-EventModal">
                  {getDateToBeDisplayed(EventDate)}
                </p>
                <p className="secondaryHeading-EventModal">
                  {props.single.venue} - {EventTime}
                </p>
              </div>
            </div>

            <div className="description-EventModal">
              {parse(props.single.description)}
            </div>

            {showButton() ? (
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
          {showButton() ? (
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

export default EventCustomButton;
