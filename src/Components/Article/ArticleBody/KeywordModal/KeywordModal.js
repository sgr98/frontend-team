/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../ReusableComponents/Loading/Loading';
import './KeywordModal.css';
import { Modal, Button } from 'react-bootstrap';

const KeywordModal = (props) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      let queryRoute = `${process.env.REACT_APP_BASE_URL}/front/`;

      if (props.category === 'project') {
        queryRoute += `/projects?query_string=${props.keyword
          .toLowerCase()
          .replace(/\s+/g, '+')}`;
        axios
          .get(queryRoute)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } else {
        queryRoute = `${
          process.env.REACT_APP_BASE_URL
        }/front/blogs/tags/${props.keyword
          .toLowerCase()
          .replace(/\s+/g, '%20')}`;

        axios
          .get(queryRoute)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
        // setData(blogs);
      }
    }
  }, [show]);

  return (
    <>
      <span className="keyword-KeywordModal" onClick={handleShow}>
        {`#${props.keyword}`}
      </span>
      <Modal show={show} onHide={handleClose} className="Article-Modal">
        <Modal.Header closeButton>
          <Modal.Title>Search results for '{props.keyword}'</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Loading show={loading} />
          {loading ? (
            <></>
          ) : (
            <ul>
              {data.map((post) => {
                if (post) {
                  return (
                    <li key={post._id}>
                      {/* <a href={link} rel="noopener noreferrer" target="_blank">
                      {link}
                    </a> */}
                      <Link to={post._id}>{post.title}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          )}
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

export default KeywordModal;
