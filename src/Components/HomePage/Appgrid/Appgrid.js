import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TrophyIcon from './trophy.png';
import './Appgrid.css';

export default class Appgrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="root-AppGrid">
        <p className="Heading-AppGrid">Explore and Get stuff done !!!</p>
        <p className="Heading-AppGrid-Mobile">Explore!!!</p>
        <div className="container-fluid full">
          <div className="container2">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <Link to="/Blogs">
                  <div className="custom module-border-wrap">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                    <div className="text">
                      <p style={{ marginTop: '7%' }}>BLOGS</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <div className="custom module-border-wrap">
                  <img src={TrophyIcon} alt="Trophy Icon" />
                  <div className="text">
                    <p>PROJECTS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <Link to="/Events/Challenges">
                  <div className="custom module-border-wrap">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                    <div className="text">
                      <p>CHALLENGES</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <Link to="/TechnicalCommittee">
                  <div className="custom module-border-wrap">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                    <div className="text">
                      <p>TECHNICAL COMMITTEE</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <Link to="/Achievements">
                  <div className="custom module-border-wrap">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                    <div className="text">
                      <p>HALL OF FAME</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <Link to="/Events/CalendarEvents">
                  <div className="custom module-border-wrap">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                    <div className="text">
                      <p>
                        CALENDER
                        <br />
                        EVENTS
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
