import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './TechnicalTeamCardData.css';

export const TechnicalTeamCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.tier) {
    case 'top':
      memberStyle =
        'data-container-TechnicalTeamCardData Top-TechnicalTeamCardData';
      break;
    case 'middle':
      memberStyle =
        'data-container-TechnicalTeamCardData Middle-TechnicalTeamCardData';
      break;
    case 'bottom':
      memberStyle =
        'data-container-TechnicalTeamCardData Bottom-TechnicalTeamCardData';
      break;
    default:
      memberStyle =
        'data-container-TechnicalTeamCardData Bottom-TechnicalTeamCardData';
  }

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
          <Card.Text className="rollNo-TechnicalTeamCardData">
            {member.rollNo}
          </Card.Text>
          <Card.Title className="name-TechnicalTeamCardData">
            {member.name}
          </Card.Title>
          <Card.Text className="designation-TechnicalTeamCardData">
            {member.designation}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
