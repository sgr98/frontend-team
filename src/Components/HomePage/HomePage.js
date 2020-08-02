/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';
import Featured from './Featured/Featured';
import LimeLightZone from './LimeLightZone/LimeLightZone';
import AnnouncementBar from './Announcementbar/AnnouncementBar';
import Appgrid from './Appgrid/Appgrid';
import ClubsInfo from './ClubsInfo/ClubSlide';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/home`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="HomePage">
      <Navigation />
      {loading ? (
        <h1>Loading...ssssss</h1>
      ) : (
        <>
          <Featured projects={data['f_projects']} />
          <Appgrid />
          <AnnouncementBar announcements={data['news']} />
          <LimeLightZone />
          <ClubsInfo />
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
