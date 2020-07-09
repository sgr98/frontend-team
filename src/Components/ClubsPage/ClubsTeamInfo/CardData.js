import React from 'react';
import Card from 'react-bootstrap/Card';
import DisplayPicture from './display picture.png';
import './CardData.css';

export const CardData = ({ member }) => {
  // assign type of member
  let memberStyle = '';
  switch (member.designation) {
    case 'Coordinator':
      memberStyle = 'data-container-CardData Coordinator-CardData';
      break;
    case 'Co-Coordinator':
      memberStyle = 'data-container-CardData Co-Coordinator-CardData';
      break;
    case 'Alumini':
      memberStyle = 'data-container-CardData Alumini-CardData';
      break;
    default:
      memberStyle = 'data-container-CardData Co-Coordinator-CardData';
  }
  // Alumini
  if (memberStyle === 'data-container-CardData Alumini-CardData') {
    return (
      <div>
        <Card className={memberStyle}>
          <Card.Body className="alumini-textBody-CardData">
            <Card.Title style={{ fontWeight: '700', fontSize: '150%' }}>
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
          <p className="dPicture-border-CardData">
            <Card.Img
              src={DisplayPicture}
              alt="DisplayPicture"
              className="displayPicture-CardData"
            />
          </p>
          <Card.Body className="textBody-CardData">
            <Card.Text className="rollNo-CardData">{member.rollNo}</Card.Text>
            <Card.Title className="name-CardData">{member.name}</Card.Title>
            <Card.Text className="designation-CardData">
              {member.designation}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
