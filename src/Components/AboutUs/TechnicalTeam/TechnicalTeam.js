import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TechnicalTeamCardData } from './TechnicalTeamCardData';

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

  const topheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'top') {
          return (
            <Col
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 3 }}
              key={Math.random()}
            >
              <TechnicalTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  const middleheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'middle') {
          return (
            <Col
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 3 }}
              key={Math.random()}
            >
              <TechnicalTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  const bottomheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'bottom') {
          return (
            <Col
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
              key={Math.random()}
            >
              <TechnicalTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  return (
    <div className="container-TechnicalTeam" style={{ padding: '3% 5%' }}>
      <Container fluid>
        {topheads}
        {middleheads}
        {bottomheads}
      </Container>
    </div>
  );
};
