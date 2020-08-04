import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './CardData.css';

export const CardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.position.toLowerCase()) {
    case 'club head':
      memberStyle = 'data-container-CardData ClubHead-CardData';
      break;
    case 'co-coordinator':
      memberStyle = 'data-container-CardData Co-Coordinator-CardData';
      break;
    default:
      memberStyle = 'data-container-CardData Co-Coordinator-CardData';
  }

  return (
    <div>
      <Card className={memberStyle}>
        <p className="dPicture-border-CardData">
          <Card.Img
            src={`${process.env.REACT_APP_BASE_URL}/images/${member.dp_url}`}
            alt="DisplayPicture"
            className="displayPicture-CardData"
          />
        </p>
        <Card.Body className="textBody-CardData">
          <Card.Text className="rollNo-CardData">{member.roll_num}</Card.Text>
          <Card.Title className="name-CardData">{member.name}</Card.Title>
          <Card.Text className="position-CardData">{member.position}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
