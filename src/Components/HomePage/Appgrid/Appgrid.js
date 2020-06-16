import React, { Component } from 'react';
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
                <div className="custom module-border-wrap">
                  <img src={TrophyIcon} alt="Trophy Icon" />
                  <div className="text">
                    <p>
                      TALKS &
                      <br />
                      WORKSHOPS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <div className="custom module-border-wrap">
                  <img src={TrophyIcon} alt="Trophy Icon" />
                  <div className="text">
                    <p>
                      UPCOMING
                      <br />
                      ACTIVITIES
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <div className="custom module-border-wrap">
                  <img src={TrophyIcon} alt="Trophy Icon" />
                  <div className="text">
                    <p>
                      UPCOMING
                      <br />
                      COMPETITIONS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <div className="custom module-border-wrap">
                  <img src={TrophyIcon} alt="Trophy Icon" />
                  <div className="text">
                    <p>
                      STUDENT
                      <br />
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
                <div className="custom module-border-wrap">
                  <img src={TrophyIcon} alt="Trophy Icon" />
                  <div className="text">
                    <p>
                      FACILITIES
                      <br />
                      AVAILABLE
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 box">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
