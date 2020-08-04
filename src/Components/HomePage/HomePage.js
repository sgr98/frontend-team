/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Spinner} from 'react-bootstrap';
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
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="HomePage">
      <Navigation />
      {loading ? (
        <div className="spinner-c-overlay">
        <div class="row h-100">
            <div class="col-sm-12 my-auto">
                <div class="p-5 mx-auto">
                <Spinner style={{width:"5vmax",height:"5vmax"}} className="loadingSpinner my-auto" animation="border" variant="primary" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                <h1 style={{fontWeight:"bolder"}}>Pumping awesomeness.. Please wait :)</h1>
                </div>
            </div>
        </div>
        </div>
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
      <Footer />
    </div>
  );
};

export default HomePage;
