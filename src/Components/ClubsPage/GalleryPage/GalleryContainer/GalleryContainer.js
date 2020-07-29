import React from 'react';
import ImageContainer from './ImageContainer/ImageContainer'
import './GalleryContainer.css';

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