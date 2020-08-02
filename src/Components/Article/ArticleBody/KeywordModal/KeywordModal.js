/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Spinner} from 'react-bootstrap'
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

  function getAllBlogs() {
    let allBlogs = [];

    let allClubs = [{ name: 'general' }];
    allClubs = allClubs.concat(props.clubs);
    allClubs.forEach(async ({ name }) => {
      const queryRoute = `${
        process.env.REACT_APP_BASE_URL
      }/front/blogs/${name
        .toLowerCase()
        .replace(/\s+/g, '%20')}?filter=${props.keyword
        .toLowerCase()
        .replace(/\s+/g, '+')}`;

      await axios
        .get(queryRoute)
        .then((res) => {
          console.log(name, res.data);
          allBlogs = allBlogs.concat(res.data);
          console.log(allBlogs);
        })
        .catch((err) => console.log(err));
    });
    return allBlogs;
  }

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
            console.log(res.data);
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } else {
        // queryRoute += `/blogs/literary?filter=${props.keyword
        //   .toLowerCase()
        //   .replace(/\s+/g, '+')}`;
        // axios
        //   .get(queryRoute)
        //   .then((res) => {
        //     console.log(res.data);
        //     setData(res.data);
        //   })
        //   .catch((err) => console.log(err));
        let blogs = getAllBlogs();
        console.log(blogs);
        setData(blogs);
        setLoading(false);
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
          {loading ? (
          <Spinner className="loadingSpinner" animation="border" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
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
