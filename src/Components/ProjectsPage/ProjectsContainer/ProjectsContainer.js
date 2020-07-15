import React, { useState } from 'react';
import './ProjectsContainer.css';
import * as uuid from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCardData from './ProjectCardData';
import PaginationComponent from '../../ReusableComponents/Pagination/Pagination';

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: true,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'Synopsis: The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
  ]);

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
              <ProjectCardData project={project} />
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
