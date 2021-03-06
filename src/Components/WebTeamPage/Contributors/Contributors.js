import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContributorsCardData from './ContributorsCardData';

export const Contributors = () => {
  const [members, setMembers] = useState([
    {
      rollNo: 'CE18B033',
      name: 'Raza Ayob',
      designation: 'Content Team',
      tier: 'middle',
    },
    {
      rollNo: 'CH18B033',
      name: 'Sunil Kumar',
      designation: 'Content Team',
      tier: 'middle',
    },
    {
      rollNo: 'CE18B033',
      name: 'Rishab Gupta',
      designation: 'Design Team',
      tier: 'middle',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'back end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'back end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      designation: 'back end',
      tier: 'bottom',
    },
  ]);

  const topheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'top') {
          return (
            <Col xs={12} sm={6} key={Math.random()} className="pt-1 px-2">
              <ContributorsCardData member={member} />
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
              xs={12}
              sm={6}
              lg={4}
              key={Math.random()}
              className="py-0 px-2"
            >
              <ContributorsCardData member={member} />
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
              sm={{ span: 10, offset: 0 }}
              sm={{ span: 6, offset: 0 }}
              lg={4}
              key={Math.random()}
              className="py-0 px-2"
            >
              <ContributorsCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  return (
    <div className="container-Contributors mb-5">
      {/* <Container fluid className="px-4">
        {topheads}
        {middleheads}
        {bottomheads}
      </Container> */}
    </div>
  );
};

export default Contributors;
