import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TechnicalTeamCardData } from './TechnicalTeamCardData';
import './TechnicalTeam.css';

export const TechnicalTeam = () => {
  const [members, setMembers] = useState([
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Technical Affairs Secretary',
      tier: 'top',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Subhash Kesari',
      designation: 'Ideas-Square President',
      tier: 'middle',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Subhash Chandra K.',
      designation: 'Tech Meet Contigent Head',
      tier: 'middle',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Aermodelling Club Head',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Aermodelling Club Head',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Aermodelling Club Head',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Aermodelling Club Head',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Aermodelling Club Head',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'Aermodelling Club Head',
      tier: 'bottom',
    },
  ]);
  return (
    <div className="container-TechnicalTeam">
      <Container fluid>
        <Row>
          {members.map((member) => {
            return (
              <Col sm={6} lg={4} key={Math.random()}>
                <TechnicalTeamCardData member={member} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
