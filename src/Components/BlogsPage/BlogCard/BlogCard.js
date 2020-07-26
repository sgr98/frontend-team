import React from 'react';
import './BlogCard.css';

import { Button } from 'react-bootstrap';

const Card = ({ single }) => {
  let imageSrc =
    'https://images.unsplash.com/photo-1503560683205-acf61ac68a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

  if (single.gallery.length !== 0) {
    imageSrc = `${process.env.REACT_APP_BASE_URL}/images/${single.gallery[0]}`;
  }

  return (
    <div className="event-card-container">
      <div className="event-card-content">
        <div className="event-card-absolute">
          {' '}
          <p className="blog-card-title">{single.title}</p>
          <span className="card-topic-BlogCard">Mir Sameed Ali</span>
        </div>
        <div className="event-card-content-overlay" />
        <img
          className="event-card-content-image"
          alt="Event-Poster"
          src={imageSrc}
        />
        <div className="event-card-content-details event-card-fadeIn-bottom">
          <p className="card-title-BlogCard">{single.title}</p>
          <span className="card-topic-BlogCard">Mir Sameed Ali</span>

          <div className="card-btn-container-BlogCard">
            <Button variant="outline" className="card-btn-BlogCard">
              Read Blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
