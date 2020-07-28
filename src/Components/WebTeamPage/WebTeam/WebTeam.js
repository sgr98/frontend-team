import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WebTeamCardData from './WebTeamCardData';

export const WebTeam = () => {
  const [members, setMembers] = useState([
    {
      rollNo: 'CS18B010',
      name: 'Deep Nithin Maheshwari',
      designation: 'overall project head',
      tier: 'top',
    },
    {
      rollNo: 'ME18B018',
      name: 'Natesh Aravind S.',
      designation: 'content and design head',
      tier: 'top',
    },
    {
      rollNo: 'CS18B028',
      name: 'Shubankar Bhadra',
      designation: 'back-end head',
      tier: 'top',
    },
    {
      rollNo: 'CS18B013',
      name: 'Mir Sameed Ali',
      designation: 'front-end head',
      tier: 'top',
    },

    {
      rollNo: 'CS18B003',
      name: 'Arpit Bandejiya',
      designation: 'Backend core',
      tier: 'middle',
    },
    {
      rollNo: 'CH18B003',
      name: 'Abhishek Kumar Gupta',
      designation: 'frontend core',
      tier: 'middle',
    },
    {
      rollNo: 'CH19B033',
      name: 'Noble Mathews',
      designation: 'full stack',
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
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 0 }}
              key={Math.random()}
              className="pt-1 px-2"
            >
              <WebTeamCardData member={member} />
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
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 0 }}
              lg={4}
              key={Math.random()}
              className="py-0 px-2"
            >
              <WebTeamCardData member={member} />
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
              sm={{ span: 6, offset: 0 }}
              lg={4}
              key={Math.random()}
              className="py-0 px-2"
            >
              <WebTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  return (
    <div className="container-WebTeam">
      <Container fluid className="px-5">
        {topheads}
        {middleheads}
        {bottomheads}
      </Container>
    </div>
  );
};
