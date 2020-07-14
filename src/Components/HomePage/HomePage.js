/* eslint-disable arrow-body-style */
import React from 'react';
import './HomePage.css';
import Featured from './Featured/Featured';
import LimeLightZone from './LimeLightZone/LimeLightZone';
import AnnouncementBar from './Announcementbar/AnnouncementBar';
import Appgrid from './Appgrid/Appgrid';
import ClubsInfo from './ClubsInfo/ClubSlide';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navigation />
      <Featured />
      <Appgrid />
      <AnnouncementBar />
      <LimeLightZone />
      <ClubsInfo />
      <Footer />
    </div>
  );
};

export default HomePage;
