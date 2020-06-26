import React from 'react';
import './card.css';
import { Button } from 'react-bootstrap';

const Card = ({ single }) => {
  return (
    <div className="event-card-container">
      <div className="event-card-content">
        <div className="event-card-content-overlay"></div>
        <img
          className="event-card-content-image"
          src="https://images.unsplash.com/photo-1503560683205-acf61ac68a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        />
        <div className="event-card-content-details event-card-fadeIn-bottom">
          <span className="event-card-title">{single.title}</span>
          <span className="event-card-topic">Topic:{single.topic}</span>
          <p className="event-card-description">{single.description}</p>
          <div className="event-card-date-location">
            <span>{single.date}</span>
            <span>
              {single.location} - {single.time}
            </span>
          </div>
          <div className="event-card-btn-container">
            <Button variant="outline" className="event-card-btn">
              {' '}
              {single.buttonTitle}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
