import React from 'react';
import { withRouter } from 'react-router';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import './ProjectCardData.css';
import KeywordsList from '../KeywordsList/KeywordsList';

const ProjectCardData = ({ project, searchKeyword, history }) => {
  const showImage =
    project.snapshot_url.length !== 0 ? (
      <Col md={4} lg={3} xl={3} className="p-0 imageDiv-ProjectCardData">
        <Card.Img
          src={`${process.env.REACT_APP_BASE_URL}/images/${project.snapshot_url[0]}`}
          alt="ProjectPicture"
          className="projectPicture-ProjectCardData"
        />
      </Col>
    ) : null;

  const onClickHandler = () => {
    history.push({
      pathname: `projects/${project._id}`,
    });
  };

  const teamMembersString = project.team_members.join(', ');

  return (
    <div>
      <Card className="projectCard-container-ProjectCardData">
        <Container fluid>
          <Row>
            <Col>
              <Card.Body className="textBody-ProjectCardData">
                <Card.Title className="heading-ProjectCardData">
                  {project.title}
                </Card.Title>
                <Card.Text className="team-ProjectCardData">
                  TEAM: {teamMembersString}
                </Card.Text>
                {/* <Card.Text className="guide-ProjectCardData">
                  GUIDE: {project.guide}
                </Card.Text> */}
                <div className="synopsis-ProjectCardData">
                  {parse(project.description)}
                </div>

                <Button
                  variant="secondary"
                  className="buttonText-ProjectCardData"
                  onClick={onClickHandler}
                >
                  View Project
                </Button>
                <KeywordsList
                  data={project.keywords}
                  searchKeyword={searchKeyword}
                />
              </Card.Body>
            </Col>
            {showImage}
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default withRouter(ProjectCardData);
