import React, { useEffect } from 'react';
import './AchievementCard.css';
import ReadMoreReact from 'read-more-react';

const Card_template = ({ single, handleClick }) => {
  return (
    <div className="achievement-card-container">
      <div
        className="achievement-card-content"
        onClick={handleClick}
        style={{
          backgroundImage: `url(
              ${process.env.REACT_APP_BASE_URL}/images/${single.pics_url[0]}
            )`,
        }}
      >
        <div className="achievement-card-text">
          <p className="achievement-card-title">{single.title}</p>
          <p className="achievement-card-caption">{single.caption}</p>
          <div
            className="achievement-card-description"
            dangerouslySetInnerHTML={{ __html: `${single.description}` }}
          >
            {/* removed to accomodate backend design */}
            {/* <ReadMoreReact
              text={single.description}
              min={210}
              max={220}
              ideal={215}
              readMoreText=".. Read More ..."
            /> */}
          </div>
        </div>
        {/* <img className="achievement-card-image"
            src={
              single.pics_url
                ? `${process.env.REACT_APP_BASE_URL}/images/${single.pics_url[0]}`
                : 'https://images.unsplash.com/photo-1543722615-dbf5edf1a00d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
            }
          />  */}
      </div>
    </div>
  );
};

export default Card_template;
