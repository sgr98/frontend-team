import React from 'react';
import './ClubSlide.css';
import InnerSlide from './innerSlide/innerSlide';

const ClubSlide = (props) => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      <div className="heading-LimeLightHeading">
        <div className="lineAbove-LimeLightHeading" />
        <h3>CLUBS</h3>
        <div className="lineBelow-LimeLightHeading" />
      </div>
      <div id="ClubeSlide-page-container">
        <div
          className="swiper-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="swiper-container" id="ClubeSlideOuter-container">
            <div className="swiper-wrapper">
              {props.clubs.map((single, index) => (
                <InnerSlide key={index} index={index} data={single} />
              ))}
            </div>
          </div>
          {width > 768 ? (
            <>
              <div
                className="swiper-button-next"
                id="ClubeSlideOuter-swiper-button-next"
              ></div>
              <div
                className="swiper-button-prev"
                id="ClubeSlideOuter-swiper-button-prev"
              ></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ClubSlide;
