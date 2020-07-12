import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReadMoreReact from 'read-more-react';
import ProjectPicture from './ProjectPicture.png';
import './ProjectCardData.css';

export const ProjectCardData = ({ project }) => {
  const showImage = project.showImage ? (
    <Col md={3} className="p-2">
      <Card.Img
        src={ProjectPicture}
        alt="ProjectPicture"
        className="projectPicture-ProjectCardData"
      />
    </Col>
  ) : null;

  return (
    <div>
      <Card className="projectCard-container-ProjectCardData">
        <Container fluid>
          <Row>
            <Col>
              <Card.Body className="textBody-ProjectCardData">
                <Card.Title className="heading-ProjectCardData">
                  {project.heading}
                </Card.Title>
                <Card.Text className="team-ProjectCardData">
                  TEAM: {project.team}
                </Card.Text>
                <Card.Text className="guide-ProjectCardData">
                  GUIDE: {project.guide}
                </Card.Text>
                <p className="synopsis-ProjectCardData">
                  <span>Synopsis:</span>
                  <ReadMoreReact
                    text={project.synopsis}
                    max={270}
                    ideal={260}
                    readMoreText="...Read More"
                  />
                </p>

                <Button variant="primary">{project.buttonText}</Button>
              </Card.Body>
            </Col>
            {showImage}
          </Row>
        </Container>
      </Card>
    </div>
  );
};
