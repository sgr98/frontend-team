import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './UpcomingTalks.css';

const data = [
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
  {
    title: 'Advanced Chaos Theory by Prof. P C Deshmuk',
    time: 'Sunday, 5-12-2020, 2:00 pm',
    location: 'TC1 Transit Campus',
  },
];

const UpcomingTalks = () => {
  useEffect(() => {
    const swiper1 = new Swiper('#UpcomingTalks-swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 4,
      spaceBetween: 30,
      mousewheel: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      lazy: true,
    });
  });
  return (
    <div>
      <div id="UpcomingTalks-center">
        <div className="center heading-carousel">
          Upcoming Talks & Workshops
        </div>
        <div className="swiper-container" id="UpcomingTalks-swiper-container">
          <div className="swiper-wrapper">
            {data.map((item, index) => (
              <div
                id="UpcomingTalks-swiper-slide"
                className="swiper-slide"
                key={index}
              >
                <span id="UpcomingTalksText"> {item.title}</span>

                <span id="UpcomingTalksDate">
                  {item.time}
                  at
                  {item.location}
                </span>
              </div>
            ))}
          </div>

          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingTalks;
