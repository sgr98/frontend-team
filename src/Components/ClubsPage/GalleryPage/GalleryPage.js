import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryContainer from './GalleryContainer/GalleryContainer';
import ClubsNavbar from '../ClubsNavbar/ClubsNavbar';
import ClubsFooter from '../ClubsFooter/ClubsFooter';
import './GalleryPage.css';

const GalleryPage = ({ClubName="Quantum"}) => {
  const [clubGallery, setGallery] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/gallery/${ClubName}`)
      .then((res) => {
        setGallery(res.data);
      });
  }, []);
  return (
    <div>
        <ClubsNavbar />
        <div class="Content-GalleryPage">
        <GalleryContainer data={clubGallery}/>
        </div>
        <ClubsFooter />
    </div>
  );
};

export default GalleryPage;