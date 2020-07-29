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
  //assign classes for roll/name/designation according to tier
  const dpClassName =
    member.tier === 'top'
      ? 'top-dPicture-border-WebTeamCardData'
      : 'dPicture-border-WebTeamCardData';
  const rollNoClassName =
    member.tier === 'top'
      ? 'top-rollNo-WebTeamCardData'
      : 'rollNo-WebTeamCardData';
  const nameClassName =
    member.tier === 'top' ? 'top-name-WebTeamCardData' : 'name-WebTeamCardData';
  const designationClassName =
    member.tier === 'top'
      ? 'top-designation-WebTeamCardData'
      : 'designation-WebTeamCardData';

  return (
    <div>
      <Card className={memberStyle}>
        <p className={dpClassName}>
          <Card.Img
            src={DisplayPicture}
            alt="DisplayPicture"
            className="displayPicture-WebTeamCardData"
          />
        </p>
        <Card.Body className="textBody-WebTeamCardData">
          <Card.Text className={rollNoClassName}>{member.rollNo}</Card.Text>
          <Card.Title className={nameClassName}>{member.name}</Card.Title>
          <Card.Text className={designationClassName}>
            {member.designation}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WebTeamCardData;
