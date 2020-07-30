import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './ImageContainer.css';

const ImageContainer = ({ galleryStr }) => {
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setGallery(img);
    setShow(true);
  };

  return (
    <div className="Gallery-ImageContainer">
      <Modal show={show} onHide={handleClose} className="achievements-Modal">
        <Modal.Header closeButton>
          <Modal.Title>Event Highlights</Modal.Title>
        </Modal.Header>
        <div className="CustomHR" />
        <Modal.Body>
          <img
            className="d-block w-100"
            // src={`${process.env.REACT_APP_BASE_URL}/images/${single}`}
            src={`${gallery}`}
            style={{
              display: 'block',
              maxWidth: '85vw',
              maxHeight: '70vh',
              width: 'auto',
              height: 'auto',
            }}
            alt={'Event Pic'}
          />
        </Modal.Body>
      </Modal>
      {galleryStr.map((id, index) => (
        <div className="ClubGallery-Img-border" key={id}>
          <div

            key={`clubImg${index}`}

            className="ClubGallery-Img"
            onClick={() =>
              handleShow(`${process.env.REACT_APP_BASE_URL}/images/${id}`)
            }
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/images/${id})`,
            }}

          />

        </div>
      ))}
    </div>
  );
};
export default ImageContainer;
