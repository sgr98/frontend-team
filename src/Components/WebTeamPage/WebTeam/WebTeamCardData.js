import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './WebTeamCardData.css';

const WebTeamCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.tier) {
    case 'top':
      memberStyle = 'data-container-WebTeamCardData Top-WebTeamCardData';
      break;
    case 'middle':
      memberStyle = 'data-container-WebTeamCardData Middle-WebTeamCardData';
      break;
    case 'bottom':
      memberStyle = 'data-container-WebTeamCardData Bottom-WebTeamCardData';
      break;
    default:
      memberStyle = 'data-container-WebTeamCardData Bottom-WebTeamCardData';
  }

  return (
    <div>
      <Card className={memberStyle}>
        <p className="dPicture-border-WebTeamCardData">
          <Card.Img
            src={DisplayPicture}
            alt="DisplayPicture"
            className="displayPicture-WebTeamCardData"
          />
        </p>
        <Card.Body className="textBody-WebTeamCardData">
          <Card.Text className="rollNo-WebTeamCardData">
            {member.rollNo}
          </Card.Text>
          <Card.Title className="name-WebTeamCardData">
            {member.name}
          </Card.Title>
          <Card.Text className="designation-WebTeamCardData">
            {member.designation}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WebTeamCardData;
