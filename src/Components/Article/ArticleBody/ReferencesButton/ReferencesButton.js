import React, { useState } from 'react';
import './ReferencesButton.css';
import { Modal, Button } from 'react-bootstrap';

import ReferenceIcon from './ReferenceIcon.png';

const ReferencesButton = () => {
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
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Copyright_infringement"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://en.wikipedia.org/wiki/Copyright_infringement
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Copyright_infringement"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://en.wikipedia.org/wiki/Copyright_infringement
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Copyright_infringement"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://en.wikipedia.org/wiki/Copyright_infringement
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Copyright_infringement"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://en.wikipedia.org/wiki/Copyright_infringement
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Copyright_infringement"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://en.wikipedia.org/wiki/Copyright_infringement
              </a>
            </li>
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
