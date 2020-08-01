import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './TechnicalTeamCardData.css';

const TechnicalTeamCardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  const tierStyle = 'technical secretary';
  switch (member.position) {
    case tierStyle:
      memberStyle =
        'data-container-TechnicalTeamCardData Top-TechnicalTeamCardData';
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
            src={`${process.env.REACT_APP_BASE_URL}/images/${member.dp_url}`}
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
          <Card.Text className="designation-TechnicalTeamCardData">
            {member.position}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TechnicalTeamCardData;
