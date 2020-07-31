import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './ContributorsCardData.css';

const ContributorsCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.tier) {
    case 'top':
      memberStyle =
        'data-container-ContributorsCardData Top-ContributorsCardData';
      break;
    case 'middle':
      memberStyle =
        'data-container-ContributorsCardData Middle-ContributorsCardData';
      break;
    case 'bottom':
      memberStyle =
        'data-container-ContributorsCardData Bottom-ContributorsCardData';
      break;
    default:
      memberStyle =
        'data-container-ContributorsCardData Bottom-ContributorsCardData';
  }
  //assign classes for roll/name/designation according to tier
  const dpClassName =
    member.tier === 'top'
      ? 'top-dPicture-border-ContributorsCardData'
      : 'dPicture-border-ContributorsCardData';
  const rollNoClassName =
    member.tier === 'top'
      ? 'top-rollNo-ContributorsCardData'
      : 'rollNo-ContributorsCardData';
  const nameClassName =
    member.tier === 'top'
      ? 'top-name-ContributorsCardData'
      : 'name-ContributorsCardData';
  const designationClassName =
    member.tier === 'top'
      ? 'top-designation-ContributorsCardData'
      : 'designation-ContributorsCardData';

  return (
    <div>
      <Card className={memberStyle}>
        <p className={dpClassName}>
          <Card.Img
            src={DisplayPicture}
            alt="DisplayPicture"
            className="displayPicture-ContributorsCardData"
          />
        </p>
        <Card.Body className="textBody-ContributorsCardData">
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

export default ContributorsCardData;
