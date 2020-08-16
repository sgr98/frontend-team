import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import './CardData.css';

export const CardData = ({ member }) => {
  // Assign club head/co-cordinator
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
          <Card.Title className="name-CardData">{member.name}</Card.Title>
          <Card.Text className="position-CardData">{member.position}</Card.Text>
          <Card.Text className="email_id-CardData">{member.email_id}</Card.Text>
          {/* <Card.Text className="contact-CardData">{member.contact}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};
