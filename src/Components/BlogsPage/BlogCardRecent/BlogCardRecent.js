import React from 'react';
import './BlogCardRecent.css';
import ReadMoreReact from 'read-more-react';

const BlogCardRecent = ({ data }) => {
  return (
    <div className="container-BlogCardRecent">
      <div className="card-content-BlogCardRecent">
        <div className="card-content-overlay-BlogCardRecent" />
        <img
          className="event-card-content-image"
          alt="Event-Poster"
          src="https://images.unsplash.com/photo-1544664465-e53cc8e9b3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <div className="card-content-details-BlogCardRecent">
          <div className="card-topRow-BlogCardRecent">
            <p className="card-title-BlogCardRecent">{data.title}</p>
            <div className="recentTag-BlogCardRecent">
              <span>RECENT</span>
            </div>
          </div>
          <span className="card-SubHeading-BlogCardRecent">
            {data.subHeading}
          </span>

          <div className="card-description-BlogCardRecent">
            <ReadMoreReact
              text={data.body}
              max={3000}
              ideal={2500}
              readMoreText="Read More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardRecent;
