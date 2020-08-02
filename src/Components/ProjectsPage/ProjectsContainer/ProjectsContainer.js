import React, { useState, useEffect } from 'react';
import './ProjectsContainer.css';
import axios from 'axios';
import * as uuid from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCardData from './ProjectCardData';
import PaginationComponent from '../../ReusableComponents/Pagination/Pagination';

const ProjectsContainer = ({ url, searchKeyword }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((res) => {
      let data = [];

      data = res.data.filter((project) => project !== null);
      setProjects(data);

      setLoading(false);
    });
  }, [url]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 100);
  };

  // next page button handler

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 100);
  };

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 100);
  };

  return (
    <div
      className="container-ProjectsContainer"
      style={{ paddingLeft: '4%', paddingRight: '4%' }}
    >
      <Container fluid>
        <Row>
          {currentPosts.map((project) => (
            <Col xs={12} key={uuid.v4()}>
              <ProjectCardData
                project={project}
                searchKeyword={searchKeyword}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <PaginationComponent
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={projects.length}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      />
    </div>
  );
};

export default ProjectsContainer;
