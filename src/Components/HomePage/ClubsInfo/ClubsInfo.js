/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './ClubsInfo.css';
import ClubSlide from './ClubSlide/ClubSlide';

class ClubsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      controls: true,
      indicators: true,
      pause: true,
      interval: null,
    };
    return (
      <div className="root-ClubsInfo">
        <Carousel {...settings}>
          <Carousel.Item>
            <ClubSlide />
          </Carousel.Item>
          <Carousel.Item>
            <ClubSlide />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ClubsInfo;
