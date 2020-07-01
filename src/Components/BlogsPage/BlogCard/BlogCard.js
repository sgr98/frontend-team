import React from "react";
import "./BlogCard.css";
import ReadMoreReact from "read-more-react";
import { Button } from "react-bootstrap";

const Card = ({ single }) => {
  return (
    <div className="event-card-container">
      <div className="event-card-content">
        <div className="event-card-absolute">
          {" "}
          <p className="blog-card-title">{single.title}</p>
          <span className="event-card-topic">Topic:{single.topic}</span>
        </div>
        <div className="event-card-content-overlay"></div>
        <img
          className="event-card-content-image"
          alt="Event-Poster"
          src={
            single.image
              ? single.image
              : "https://images.unsplash.com/photo-1503560683205-acf61ac68a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        ></img>
        <div className="event-card-content-details event-card-fadeIn-bottom">
          <p className="event-card-title">{single.title}</p>
          <span className="event-card-topic">Topic:{single.topic}</span>
          <div className="event-card-description">
            <ReadMoreReact
              text={single.description}
              max={270}
              ideal={260}
              readMoreText="Read More"
            />
          </div>
          <div className="event-card-date-location">
            <span>{single.date}</span>
            <span>
              {single.location} - {single.time}
            </span>
          </div>
          <div className="event-card-btn-container">
            <Button variant="outline" className="event-card-btn">
              {" "}
              {single.buttonTitle}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
