import React from 'react';
import './AchievementCard.css';
import ReadMoreReact from 'read-more-react';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

const Card = ({ 
    single
}) => {
    return (
      <div className="achievement-card-container">
        <div className="achievement-card-content">
          <div className="achievement-card-text">
            <p className="achievement-card-date">
            <Moment format="DD MMMM YYYY">
            {single.date}
            </Moment>
            </p>
            <p className="achievement-card-title">{single.title}</p>
            <p className="achievement-card-caption">{single.caption}</p>
            <p className="achievement-card-description">
            <ReadMoreReact
              text={single.description}
              min={210}
              max={220}
              ideal={215}
              readMoreText=".. Read More ..."
            />
            </p>
            <Button variant="outline" className="card-btn-AchievementCard">
                VIEW PROJECT
            </Button>
          </div>
          <div className="achievement-card-content-image-holder">
          <div
            className="achievement-card-content-image"
            style={{backgroundImage:
              single.image
                ? single.image
                : 'url(https://images.unsplash.com/photo-1543722615-dbf5edf1a00d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80)'
            }}
          /> 
          </div> 
        </div>

      </div>
    );
  };
  
  export default Card;
  