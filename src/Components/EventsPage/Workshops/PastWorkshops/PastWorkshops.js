import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './workshops.css';

export default class Workshops extends Component {
  render() {
    return (
      <div>
        <div className="grids container-fluid">
          <div className="container2">
            <div className="row head">
              <img src="./events.png" alt="#"></img>
              <p>Past Workshops Showcase</p>
            </div>
            
            <div className="row">
              <div className="col-md-4 col-sm-6 box">
                <div className="custom">
                </div>
              </div>
              <div className="col-md-4 col-sm-6 box">
                <div className="custom"></div>
              </div>
              <div className="col-md-4 col-sm-6 box">
                <div className="custom"></div>
              </div>
              <div className="col-md-4 col-sm-6 box">
                <div className="custom"></div>
              </div>
              <div className="col-md-4 col-sm-6 box">
                <div className="custom"></div>
              </div>
              <div className="col-md-4 col-sm-6 box">
                <div className="custom"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
