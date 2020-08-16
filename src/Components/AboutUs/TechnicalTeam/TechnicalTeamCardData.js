import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './TechnicalTeamCardData.css';

const TechnicalTeamCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  let image_url = '';
  const tierStyle = 'technical affairs secretary';
  switch (member.position.toLowerCase()) {
    case tierStyle:
      memberStyle =
        'data-container-TechnicalTeamCardData Top-TechnicalTeamCardData';
      image_url = `${process.env.REACT_APP_BASE_URL}/images/${member.dp_url}`;
      break;
    case 'technical advisor':
      memberStyle =
        'data-container-TechnicalTeamCardData Top-TechnicalTeamCardData';
      image_url = member.dp_url;
      break;
    default:
      memberStyle =
        'data-container-TechnicalTeamCardData Bottom-TechnicalTeamCardData';
      image_url = `${process.env.REACT_APP_BASE_URL}/images/${member.dp_url}`;
  }

  return (
    <div>
      <Card className={memberStyle}>
        <p className="dPicture-border-TechnicalTeamCardData">
          <Card.Img
            src={image_url}
            alt="DisplayPicture"
            className="displayPicture-TechnicalTeamCardData"
          />
        </p>
        <Card.Body className="textBody-TechnicalTeamCardData">
          <Card.Text className="rollNo-TechnicalTeamCardData">
            {member.roll_num}
          </Card.Text>
          <Card.Title className="name-TechnicalTeamCardData">
            {member.name}
          </Card.Title>
          <Card.Text className="position-TechnicalTeamCardData">
            {member.position}
          </Card.Text>
          <Card.Text className="email_id-TechnicalTeamCardData">
            {member.email_id}
          </Card.Text>
          {/* <Card.Text className="contact-TechnicalTeamCardData">
            {member.contact}
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default TechnicalTeamCardData;
