/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../ReusableComponents/Loading';
import './HomePage.css';
import Featured from './Featured/Featured';
import LimeLightZone from './LimeLightZone/LimeLightZone';
import AnnouncementBar from './Announcementbar/AnnouncementBar';
import Appgrid from './Appgrid/Appgrid';
import ClubsInfo from './ClubsInfo/ClubSlide';
import Navigation from '../Navigation/Navigation';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/home`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="HomePage">
      <Navigation />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Featured projects={data['f_projects']} />
          <Appgrid />
          <AnnouncementBar announcements={data['news']} />
          <LimeLightZone
            blogs={data['f_blogs']}
            achievements={data['achievements']}
          />
          <ClubsInfo clubs={data['clubs']} />
        </>
      )}
      <ProjectFooter />
    </div>
  );
};

export default HomePage;
