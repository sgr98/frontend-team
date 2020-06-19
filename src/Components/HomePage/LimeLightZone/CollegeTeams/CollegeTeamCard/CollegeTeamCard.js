import React from 'react';
import './CollegeTeamCard.css';
import CustomButton from '../../CustomButton/CustomButton';

const CollegeTeamCard = (props) => {
  return (
    <>
      <div className="root-CollegeTeamCard">
        <div className="content_div-CollegeTeamCard">
          <p className="heading-CollegeTeamCard">Formula Bharat Team</p>

          <p className="description-CollegeTeamCard">
            IIT Tirupati Racing is India's premier Formula Student Electric team
            with a vision to "Revolutionize Electric Mobility in India focusing
            on sustainable technologies and innovations" . We participate in the
            prestigious international competition Formula Student at Silverstone
            circuit, UK with our electric car, "EVoK" currently, and have been
            winning the Formula Student Award by IMechE for being the best
            non-UK team for the past 5 years.
          </p>
          <div className="achievement-CollegeTeamCard">
            #1 st place in formula bharath 2020
          </div>
          <div className="button-CollegeTeamCard">
            <CustomButton text="Visit our website" />
            <CustomButton text="Our Sponsors" />
          </div>
        </div>
        <div className="profile-div-CollegeTeamCard">
          <div className="team-head-profile-div-CollegeTeamCard">
            <div className="team-head-image-root-CollegeTeamCard">
              <img
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=956&q=80"
                className="team-head-image-CollegeTeamCard"
                alt="team head "
              />
            </div>
            <div className="team-head-div-CollegeTeamCard">
              <p className="team-head-name-CollegeTeamCard">Manoj Kumar J</p>
              <p className="team-head-description-CollegeTeamCard">
                Overall Team Head
              </p>
            </div>
          </div>

          <div className="imageDiv-CollegeTeamCard">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1578343552605-8d6cd52fb906?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              alt="Poster"
            />
          </div>
        </div>
      </div>

      <div className="root-CollegeTeamCard-Mobile">
        <p className="heading-CollegeTeamCard-Mobile">Formula Bharat Team</p>
        <div className="team-head-profile-div-CollegeTeamCard">
          <div className="team-head-image-root-CollegeTeamCard">
            <img
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=956&q=80"
              className="team-head-image-CollegeTeamCard"
              alt="team head "
            />
          </div>
          <div className="team-head-div-CollegeTeamCard">
            <p className="team-head-name-CollegeTeamCard">Manoj Kumar J</p>
            <p className="team-head-description-CollegeTeamCard">
              Overall Team Head
            </p>
          </div>
        </div>
        <div className="achievement-CollegeTeamCard-Mobile">
          #1 st place in formula bharath 2020
        </div>
        <div className="imageDiv-CollegeTeamCard-Mobile">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1578343552605-8d6cd52fb906?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="Poster"
          />
        </div>
        <p className="description-CollegeTeamCard-Mobile">
          IIT Tirupati Racing is India's premier Formula Student Electric team
          with a vision to "Revolutionize Electric Mobility in India focusing on
          sustainable technologies and innovations" . We participate in the
          prestigious international competition Formula Student at Silverstone
          circuit, UK with our electric car, "EVoK" currently, and have been
          winning the Formula Student Award by IMechE for being the best non-UK
          team for the past 5 years.
        </p>

        <div className="button-CollegeTeamCard-Mobile">
          <CustomButton text="Visit our website" />
        </div>
        <div className="button-CollegeTeamCard-Mobile">
          <CustomButton text="Our Sponsors" />
        </div>
      </div>
    </>
  );
};

export default CollegeTeamCard;
