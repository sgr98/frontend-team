import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GalleryContainer from './GalleryContainer/GalleryContainer';
import ClubsNavbar from '../ClubsNavbar/ClubsNavbar';
import ClubsFooter from '../ClubsFooter/ClubsFooter';
import './GalleryPage.css';

// [TODO]
// currently the pages arent linked to be subroutes with a :clubName hence the following default data being loaded
const GalleryPage = () => {
  const {ClubName} = useParams();
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
        <GalleryContainer data={clubGallery} />
      </div>
      <ClubsFooter />
    </div>
  );
};

export default GalleryPage;
