import React from 'react';
import './card.css';

import { Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import ReadMoreDiv from '../../ReusableComponents/ReadMoreDiv/ReadMoreDiv';

const Card = ({ single, showButton }) => {
  return (
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
        <div className="event-card-content-details event-card-fadeIn-bottom">
          <p className="event-card-title">{single.name}</p>
          <span className="event-card-topic">
            Category: {single.categories}
          </span>

          <div className="event-card-description">
            {/* <ReadMoreReact
              // Slice is used here to remove <p> tags
              text={single.description.slice(3, -6)}
              max={270}
              ideal={260}
              readMoreText="Read More"
            /> */}
            <ReadMoreDiv maxHeight={75}>
              {parse(single.description)}
            </ReadMoreDiv>
          </div>
          <div className="event-card-date-location">
            <span>{single.date}</span>
            <span>
              {single.venue} - {single.time}
            </span>
          </div>
          {showButton ? (
            <div className="event-card-btn-container">
              <Button variant="outline" className="event-card-btn">
                Register
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
