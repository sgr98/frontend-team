/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Featured.css';
import CustomButton2 from './CustomButton2/CustomButton2';

class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: false,
      indicators: true,
      fade: true,
      pause: false,
      interval: 7000,
    };
  }

  render() {
    return (
      <div className="border-root-featured">
        <Carousel {...this.state} style={{ background: '#20201f' }}>
          <Carousel.Item>
            <div className="carousel-root-featured">
              <div className="content-div-featured">
                <p className="featured-heading">Featured.</p>
                <p className="featured-secondary-heading">
                  DIY 3 in 1 CNC Machine designed by a team of six, second year
                  Mechanical engineering students
                </p>
                <p className="featured-description">
                  Entrepreneurship Cell IIT Madras makes the entrepreneurial
                  world accessible to all group of people part of the IIT Madras
                  ecosystem, cater the audience from startup enthusiast to
                  hardcore entrepreneurs, with plethora of yearlong events like
                  Conclaves, Keynotes, Industry-defined Problems, B-Planning.
                  Entrepreneurship Cell IIT Madras makes the entrepreneurial
                  world accessible to all group of people part of the IIT Madras
                  ecosystem, cater the audience from startup enthusiast to
                  hardcore entrepreneurs. Industry-defined Problems, B-Planning.
                  Entrepreneurship Cell IIT Madras makes the entrepreneurial
                  world accessible to all.
                </p>
                <div className="button-div-featured-desktop">
                  <CustomButton2 text="Read full article" />
                </div>
              </div>
              <div className="image-div-featured">
                <div className="image-featured">
                  <img
                    className="d-block w-100"
                    src="https://www.freepngimg.com/thumb/computer%20pc/2-computer-desktop-pc-png-image.png"
                    alt="First slide"
                  />
                </div>
                <div className="button-div-featured-mobile">
                  <CustomButton2 text="Read full article" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-root-featured">
              <div className="content-div-featured">
                <p className="featured-heading">Featured.</p>
                <p className="featured-secondary-heading">
                  DIY 3 in 1 CNC Machine designed by a team of six
                </p>
                <p className="featured-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. vcsdvsdv ds v
                  button-div-featured-desktopsd
                </p>
                <div className="button-div-featured-desktop">
                  <CustomButton2 text="Read full article" />
                </div>
              </div>
              <div className="image-div-featured">
                <div className="image-featured">
                  <img
                    className="d-block w-100"
                    src="https://www.freepngimg.com/thumb/drone/21583-5-drone-transparent.png"
                    alt="First slide"
                  />
                  <div className="button-div-featured-mobile">
                    <CustomButton2 text="Read full article" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-root-featured">
              <div className="content-div-featured">
                <p className="featured-heading">Featured.</p>
                <p className="featured-secondary-heading">
                  DIY 3 in 1 CNC Machine designed by a team of six, second year
                  Mechanical engineering students
                </p>
                <p className="featured-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. vcsdvsdv ds v
                  button-div-featured-desktopsd
                </p>
                <div className="button-div-featured-desktop">
                  <CustomButton2 text="Read full article" />
                </div>
              </div>
              <div className="image-div-featured">
                <div className="image-featured">
                  <img
                    className="d-block w-100"
                    src="https://www.freepngimg.com/thumb/satellite/7-2-satellite-png-hd.png"
                    alt="First slide"
                  />
                  <div className="button-div-featured-mobile">
                    <CustomButton2 text="Read full article" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Featured;
