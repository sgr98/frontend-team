import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import TechnicalTeamCardData from './TechnicalTeamCardData';

export const TechnicalTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topHeads, setTopHeads] = useState([]);
  const [bottomHeads, setBottomHeads] = useState([]);

  let isRendered = useRef(false);

  useEffect(() => {
    // Assigning Card according to Tier
    const topHeadsArray = (
      <Row>
        {members.map((member) => {
          if (member.position.toLowerCase() === 'technical secretary') {
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

    const bottomHeadsArray = (
      <Row>
        {members.map((member) => {
          if (member.position.toLowerCase() !== 'technical secretary') {
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

    setTopHeads(topHeadsArray);
    setBottomHeads(bottomHeadsArray);
    setLoading(false);
  }, [members]);

  useEffect(() => {
    isRendered = true;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/committee`)
      .then((res) => {
        console.log(res);
        if (isRendered) {
          setMembers(res.data[0].members);
        }
        return null;
      })
      .catch((err) => console.log(err));

    return () => {
      isRendered = false;
    };
  }, []);

  return (
    <>
      {members === null ? (
        <h1 style={{ color: 'f4f4f4', margin: '1em' }}>Loading</h1>
      ) : (
        <div className="container-TechnicalTeam" style={{ padding: '3% 5%' }}>
          <Container fluid>
            {topHeads}
            {bottomHeads}
          </Container>
        </div>
      )}
    </>
  );
};
export default withRouter(TechnicalTeam);

// Static Data

// {
//   "_id": "5f1561ce20208b4ac85bb595",
//   "name": "arpit",
//   "position": "nothing he can do!",
//   "roll_num": "cs18b0xx",
//   "email_id": "arpibadejiya@gmail.com",
//   "contact": 9411890675,
//   "dp_url": "d2f5997ca0fcdfc9abfc9be92146309b.png"
// }
