import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './ContributersCardData.css';

const ContributersCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.tier) {
    case 'top':
      memberStyle =
        'data-container-ContributersCardData Top-ContributersCardData';
      break;
    case 'middle':
      memberStyle =
        'data-container-ContributersCardData Middle-ContributersCardData';
      break;
    case 'bottom':
      memberStyle =
        'data-container-ContributersCardData Bottom-ContributersCardData';
      break;
    default:
      memberStyle =
        'data-container-ContributersCardData Bottom-ContributersCardData';
  }
  //assign classes for roll/name/designation according to tier
  const dpClassName =
    member.tier === 'top'
      ? 'top-dPicture-border-ContributersCardData'
      : 'dPicture-border-ContributersCardData';
  const rollNoClassName =
    member.tier === 'top'
      ? 'top-rollNo-ContributersCardData'
      : 'rollNo-ContributersCardData';
  const nameClassName =
    member.tier === 'top'
      ? 'top-name-ContributersCardData'
      : 'name-ContributersCardData';
  const designationClassName =
    member.tier === 'top'
      ? 'top-designation-ContributersCardData'
      : 'designation-ContributersCardData';

  return (
    <div>
      <Card className={memberStyle}>
        <p className={dpClassName}>
          <Card.Img
            src={DisplayPicture}
            alt="DisplayPicture"
            className="displayPicture-ContributersCardData"
          />
        </p>
        <Card.Body className="textBody-ContributersCardData">
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

export default ContributersCardData;
