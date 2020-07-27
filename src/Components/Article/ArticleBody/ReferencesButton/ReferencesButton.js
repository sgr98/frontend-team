import React, { useState } from 'react';
import './ReferencesButton.css';
import { Modal, Button } from 'react-bootstrap';

import ReferenceIcon from './ReferenceIcon.png';

const ReferencesButton = ({ links }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className="container-ReferencesButton"
        onClick={handleShow}
      >
        <img
          src={ReferenceIcon}
          className="icon-ReferencesButton"
          alt="reference icon"
        />
        REFERENCES
      </button>
      <Modal show={show} onHide={handleClose} className="Article-Modal">
        <Modal.Header closeButton>
          <Modal.Title>REFERENCES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {links.map((link) => {
              return (
                <li key={link}>
                  <a href={link} rel="noopener noreferrer" target="_blank">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReferencesButton;
