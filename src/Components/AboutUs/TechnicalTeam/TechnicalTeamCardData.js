import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './TechnicalTeamCardData.css';

export const TechnicalTeamCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.designation) {
    case 'Coordinator':
      memberStyle = 'data-container-TechnicalTeamCardData Coordinator-TechnicalTeamCardData';
      break;
    case 'Co-Coordinator':
      memberStyle = 'data-container-TechnicalTeamCardData Co-Coordinator-TechnicalTeamCardData';
      break;
    case 'Alumini':
      memberStyle = 'data-container-TechnicalTeamCardData Alumini-TechnicalTeamCardData';
      break;
    default:
      memberStyle = 'data-container-TechnicalTeamCardData Co-Coordinator-TechnicalTeamCardData';
  }
  // Alumini
  if (memberStyle === 'data-container-TechnicalTeamCardData Alumini-TechnicalTeamCardData') {
    return (
      <div>
        <Card className={memberStyle}>
          <Card.Body className="alumini-textBody-TechnicalTeamCardData">
            <Card.Title className="meet-our-alumini-TechnicalTeamCardData">
              {member.name}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }

  //   Cooordinator , Co-Coridinator
  else {
    return (
      <div>
        <Card className={memberStyle}>
          <p className="dPicture-border-TechnicalTeamCardData">
            <Card.Img
              src={DisplayPicture}
              alt="DisplayPicture"
              className="displayPicture-TechnicalTeamCardData"
            />
          </p>
          <Card.Body className="textBody-TechnicalTeamCardData">
            <Card.Text className="rollNo-TechnicalTeamCardData">{member.rollNo}</Card.Text>
            <Card.Title className="name-TechnicalTeamCardData">{member.name}</Card.Title>
            <Card.Text className="designation-TechnicalTeamCardData">
              {member.designation}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
