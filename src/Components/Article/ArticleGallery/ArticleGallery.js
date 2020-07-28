import React from 'react';
import './ArticleGallery.css';

const ArticleGallery = ({ data, category }) => {
  let galleryComponent = null;
  if (category === 'blog') {
    galleryComponent = (
      <>
        {data.video_links.map((link) => {
          return (
            <iframe
              title="video"
              key={link}
              className="video-ArticleGalley"
              src={link}
              allowFullScreen
            />
          );
        })}

        <div className="imagesGroup-ArticleGallery">
          {data.gallery.map((image) => {
            return (
              <img
                key={image}
                className="image-ArticleGallery"
                src={`${process.env.REACT_APP_BASE_URL}/images/${image}`}
                alt="blog"
              />
            );
          })}
        </div>
      </>
    );
  } else {
    galleryComponent = (
      <div className="imagesGroup-ArticleGallery">
        {data.snapshot_url.map((image) => {
          return (
            <img
              key={image}
              className="image-ArticleGallery"
              src={`${process.env.REACT_APP_BASE_URL}/images/${image}`}
              alt="blog"
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="container-ArticleGallery">
      <div className="heading-ArticleGallery">GALLERY</div>
      {galleryComponent}
    </div>
  );
};

export default ArticleGallery;
