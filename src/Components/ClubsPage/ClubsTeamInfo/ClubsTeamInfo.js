import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardData } from './CardData';
import './ClubsTeamInfo.css';

const ClubsTeamInfo = ({ members, headDetails }) => {
  // const [members, setMembers] = useState([]);
  console.log(headDetails);
  return (
    <div className="container-ClubsTeamInfo">
      <div>
        <h1 className="meetOurTeam-text-ClubsTeamInfo">MEET OUR TEAM</h1>
      </div>
      <Container fluid>
        <Row>
          <Col sm={6} lg={4}>
            <CardData member={headDetails} />
          </Col>
          {members.map((member) => {
            return (
              <Col sm={6} lg={4} key={member._id}>
                <CardData member={member} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ClubsTeamInfo;

//Static Data

//_id: "5f0d7817279c09290079d126"
// ​​
// contact: 9999999999
// ​​
// dp_url: "485551929421f83a366ea68efdfe2c06.jpg"
// ​​
// email_id: "cs18b043@iittp.ac.in"
// ​​
// name: "Shruti"
// ​​
// position: "Co-Cordinator"
// ​​
// roll_num: "CS18B043"
// contact: "6304126471"
// dp_url: "af499903c05002573a48b502597f1d0b.jpg"
// email_id: "vishalshubhankar@gmail.com"
// name: "shubhankar"
// position: "Club Head"
// roll_num: undefined
