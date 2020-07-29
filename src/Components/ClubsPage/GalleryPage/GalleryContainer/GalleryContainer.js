import React from 'react';
import ImageContainer from './ImageContainer/ImageContainer'
import './GalleryContainer.css';
// the following is sample data and should be removed once the routes are complete [TODO]
// currently the pages arent linked to be subroutes with a :clubName hence the following sample data
const GalleryContainer = ({data={
    "Test1": [
      "222273a6c8b2ca273f06eb6494b8bf44.png",
      "959b85c271bf4af0427ede12bb397ed8.png"
    ],
    "A new system": [
      "b603df6c7ef69d0184bf8e7b8312cda9.png",
      "def60052da9e07a0977a77d3f868c089.png",
      "f6968121f308dd3fffac7882c2fcc8ea.png"
    ]
  }}) => (
    <>
    {Object.entries(data).map(([key, value]) => {
        return(
        <div className="GalleryContainer">
        <div className="heading-GalleryContainer mb-4">
        <h4>{key}</h4>
        </div>
        <ImageContainer galleryStr={value}/>
        </div>
        )
    })}
    </>
);
export default GalleryContainer;