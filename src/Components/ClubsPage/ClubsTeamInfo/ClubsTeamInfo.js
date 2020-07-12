import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardData } from './CardData';
import './ClubsTeamInfo.css';

export const ClubsTeamInfo = () => {
  const [members, setMembers] = useState([
    { rollNo: 'CS19B003', name: 'Amit Kesari', designation: 'Coordinator' },
    {
      rollNo: 'CS19B003',
      name: 'Amit Subhash Chandra Kesari',
      designation: 'Co-Coordinator',
    },
    { rollNo: 'CS19B003', name: 'Amit Kesari', designation: 'Co-Coordinator' },
    {
      rollNo: 'CS19B003',
      name: 'Amit Subhash Chandra K.',
      designation: 'Co-Coordinator',
    },
    { rollNo: 'CS19B003', name: 'Amit Kesari', designation: 'Co-Coordinator' },
    { rollNo: 'CS19B003', name: 'Amit Kesari', designation: 'Co-Coordinator' },
    { rollNo: 'CS19B003', name: 'Amit Kesari', designation: 'Co-Coordinator' },
    { rollNo: 'CS19B003', name: 'Amit Kesari', designation: 'Co-Coordinator' },
    { rollNo: '', name: 'MEET OUR ALUMINI', designation: 'Alumini' },
  ]);
  return (
    <div className="container-ClubsTeamInfo">
      <div>
        <h1 className="meetOurTeam-text-ClubsTeamInfo">MEET OUR TEAM</h1>
      </div>
      <Container fluid>
        <Row>
          {members.map((member) => {
            return (
              <Col sm={6} lg={4} key={Math.random()}>
                <CardData member={member} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
