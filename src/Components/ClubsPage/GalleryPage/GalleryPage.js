import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../ReusableComponents/Loading/Loading';
import GalleryContainer from './GalleryContainer/GalleryContainer';
import ClubsNavbar from '../ClubsNavbar/ClubsNavbar';
import ProjectFooter from '../../ProjectsPage/ProjectFooter/ProjectFooter';
import './GalleryPage.css';

const GalleryPage = () => {
  const { ClubName } = useParams();
  const [clubGallery, setGallery] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/gallery/${ClubName}`)
      .then((res) => {
        setGallery(res.data);
        setLoading(false);
      });
  }, [ClubName]);
  return (
    <div>
      <ClubsNavbar clubName={ClubName} />
      <Loading show={loading} />
      <div className="Content-GalleryPage">
        <GalleryContainer data={clubGallery} />
      </div>
      <ProjectFooter />
    </div>
  );
};

export default GalleryPage;
