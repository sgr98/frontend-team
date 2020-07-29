import React from 'react';
import ImageContainer from './ImageContainer/ImageContainer'
import './GalleryContainer.css';
// the following is sample data and should be removed once the routes are complete [TODO]
// currently the pages arent linked to be subroutes with a :clubName hence the following sample data
const GalleryContainer = ({data}) => (
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