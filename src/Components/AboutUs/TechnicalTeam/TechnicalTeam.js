import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { TechnicalTeamCardData } from './TechnicalTeamCardData';

export const TechnicalTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  let isRendered = useRef(false);

  useEffect(() => {
    isRendered = true;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/committee`)
      .then((res) => {
        console.log(res);
        if (isRendered) {
          setMembers(res.data);
        }
        return null;
      })
      .catch((err) => console.log(err));

    return () => {
      isRendered = false;
    };
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [members]);

  //Assgining Card according to Tier
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
    <>
      {members === null ? (
        <h1 style={{ color: 'f4f4f4', margin: '1em' }}>Loading</h1>
      ) : (
        <div className="container-TechnicalTeam" style={{ padding: '3% 5%' }}>
          <Container fluid>
            {topheads}
            {middleheads}
            {bottomheads}
          </Container>
        </div>
      )}
    </>
  );
};
export default withRouter(TechnicalTeam);

//Static Data
// {
//   rollNo: 'CS19B003',
//   name: 'Amit Kesari',
//   designation: 'Technical Affairs Secretary',
//   tier: 'top', //For defining Styles
// },
// {
//   rollNo: 'CS19B003',
//   name: 'Amit Subhash Kesari',
//   designation: 'Ideas-Square President',
//   tier: 'middle',
// },
// {
//   rollNo: 'CS19B003',
//   name: 'Amit Kesari',
//   designation: 'Aermodelling Club Head',
//   tier: 'bottom',
// },
