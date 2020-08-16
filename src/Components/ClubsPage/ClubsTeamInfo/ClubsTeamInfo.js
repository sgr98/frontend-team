import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardData } from './CardData';
import './ClubsTeamInfo.css';

const ClubsTeamInfo = ({ members, headDetails }) => {
  return (
    <div className="container-ClubsTeamInfo">
      <div id="OurTeam">
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
// contact: "6304126471"
// dp_url: "af499903c05002573a48b502597f1d0b.jpg"
// email_id: "vishalshubhankar@gmail.com"
// name: "shubhankar"
// position: "Club Head"
// roll_num: undefined
