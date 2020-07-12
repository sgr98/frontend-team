import React, { useState } from 'react';
import * as uuid from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCardData } from './ProjectCardData';

export const ProjectCard = () => {
  const [projects, setProjects] = useState([
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Team: Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: false,
      synopsis:
        'The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
    {
      heading: 'CNC IDEX 3D Printer - Router - Laser Engraver',
      team:
        'Team: Mullangi Sai Vivek, Satya Shyam Kasi, Nagasai Samhitha, Natesh Aravind S, Mohammed Saleeq K, Vija',
      guide:
        'Prof. T S Natrajan, Asst. Prof. Balaji Subramanyan, Asst. Prof. Sriram Sundar',
      showImage: true,
      synopsis:
        'The Robotics and Electronics club was formed in 2008, with a vision to raise the level of Robotics in the institute to an international standard by developing an integrated knowledge base in the field of Robotics. DIY 3 in 1 CNC Machine designed by a team of six, second year Mechanical engineering students. It is one of the most active clubs in CFI, comprising of 600 members from all years. iBot club is not leaving any stone unturned in the process of becoming a self-sustained student robotics hub ',
      buttonText: 'View Project',
    },
  ]);
  return (
    <div
      className="container-ProjectCard"
      style={{ paddingLeft: '4%', paddingRight: '4%' }}
    >
      <Container fluid>
        <Row>
          {projects.map((project) => {
            return (
              <Col xs={12} key={uuid.v4()}>
                <ProjectCardData project={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
