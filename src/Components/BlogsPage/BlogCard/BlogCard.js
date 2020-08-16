import React from 'react';
import './BlogCard.css';

import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

// Here styling is same as the event card

const Card = (props) => {
  const { single } = props;
  let imageSrc =
    'https://images.unsplash.com/photo-1503560683205-acf61ac68a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

  if (single.gallery.length !== 0) {
    imageSrc = `${process.env.REACT_APP_BASE_URL}/images/${single.gallery[0]}`;
  }

  const navigationHandler = () => {
    // console.log(single._id);

    props.history.push({
      pathname: `/blogs/${single._id}`,
    });
  };
  // console.log(single);

  return (
    <div className="event-card-container">
      <div className="event-card-content">
        <div className="event-card-absolute">
          {' '}
          <p className="blog-card-title">{single.title}</p>
          <span className="card-topic-BlogCard">{single.creator}</span>
        </div>
        <div className="event-card-content-overlay" />
        <img
          className="event-card-content-image"
          alt="Event-Poster"
          src={imageSrc}
        />
        <div
          className="event-card-content-details event-card-fadeIn-bottom"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '80%',
          }}
        >
          <p
            className="event-card-title"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {single.title}
          </p>
          <p
            className="event-card-topic"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Author: {single.creator}
          </p>

          <div className="card-btn-container-BlogCard">
            <Button
              variant="outline"
              className="card-btn-BlogCard"
              onClick={navigationHandler}
            >
              Read Blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
