import React from 'react';
import './BlogCardRecent.css';
import ReadMoreReact from 'read-more-react';
import { Button } from 'react-bootstrap';

const BlogCardRecent = ({ single }) => {
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
            <p className="card-title-BlogCardRecent">Blog post heading here</p>
            <div className="recentTag-BlogCardRecent">
              <span>RECENT</span>
            </div>
          </div>
          <span className="card-SubHeading-BlogCardRecent">
            SubHeading/ Authors
          </span>

          <div className="card-description-BlogCardRecent">
            <ReadMoreReact
              text={
                "There are two kinds of theme slots: Fluent UI palette slots and semantic slots.\nFluent UI palette slots are documented in IPalette. These are descriptive slots, it gives you an idea of what the color is, but you decide how to use it. Most slots with color names (besides white and black), such as yellow and yellowLight, will remain a shade of yellow (besides white and black)  in all themes, useful in cases where color has meaning (such as for errors and warnings). Customizing Fluent UI palette  remain a shade of yellow slots allows broad-stroke changes to the overall color scheme. Semantic slots are documented in I SemanticColors. These, on the other hand, are prescriptive slots, each slot having an intended use. This allows more targeted customizations. For example, you could change the light gray color of a disabled checkbox without affecting the light gray background used by list item hover/selection state, even though they share the same color, because they use different slots. This wouldn't be possible with Fluent UI palette slots. This allows more targeted customizations. You could change the light gray color of a disabled checkbox without affecting the light gray background used by list item hover/selection state. We highly recommend using semantic slots wherever possible. Have you ever wondered This allows more targeted customizations. Fluent UI palette slots. For example, you could change the light gray color of a disabled checkbox without affecting the light gray “How to coordinate between multiple drones? How to coordinate  How to simulate a manipulator or a robot Answer to each and every question is ROS(Robot Operating System)! How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” For example, you could change the light gray color of a disabled checkbox without affecting the light gray background used by list item. How to coordinate  How to simulate a manipulator or a robot Answer to each and every question is ROS(Robot Operating System)!"
              }
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
