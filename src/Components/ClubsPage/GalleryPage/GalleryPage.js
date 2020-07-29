import React from 'react';
import GalleryContainer from './GalleryContainer/GalleryContainer';
import './GalleryPage.css';
import ClubsNavbar from '../ClubsNavbar/ClubsNavbar';
import ClubsFooter from '../ClubsFooter/ClubsFooter';
const data={
    "Test1": [
      "222273a6c8b2ca273f06eb6494b8bf44.png",
      "959b85c271bf4af0427ede12bb397ed8.png"
    ],
    "A new system": [
      "b603df6c7ef69d0184bf8e7b8312cda9.png",
      "def60052da9e07a0977a77d3f868c089.png",
      "f6968121f308dd3fffac7882c2fcc8ea.png"
    ]
  }
const GalleryPage = () => {
  return (
    <div>
        <ClubsNavbar />
        <div class="Content-GalleryPage">
        <GalleryContainer data={data}/>
        </div>
        <ClubsFooter />
    </div>
  );
};

export default GalleryPage;