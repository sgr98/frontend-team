import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReadMoreReact from 'read-more-react';
import ProjectPicture from './ProjectPicture.png';
import './ProjectCardData.css';

export const ProjectCardData = ({ project }) => {
  const showImage = project.showImage ? (
    <Col md={4} lg={3} xl={3} className=" p-0">
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
                  <ReadMoreReact
                    text={project.synopsis}
                    max={1000}
                    ideal={400}
                    readMoreText="...Read More"
                  />
                </p>

                <Button
                  variant="secondary"
                  className="buttonText-ProjectCardData"
                >
                  {project.buttonText}
                </Button>
              </Card.Body>
            </Col>
            {showImage}
          </Row>
        </Container>
      </Card>
    </div>
  );
};
