import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Loading from '../../ReusableComponents/Loading/Loading';
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
          if (member.position.toLowerCase() === 'technical affairs secretary') {
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
          if (member.position.toLowerCase() !== 'technical affairs secretary') {
            return (
              <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 6, offset: 0 }}
                key={member._id}
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
        if (isRendered) {
          console.log(res.data[0].members);
          setMembers(res.data[0].members);
          setLoading(false);
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
      <Loading show={loading} />
      {members === null ? (
        <></>
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

// contact: 9411890675
// dp_url: "d2f5997ca0fcdfc9abfc9be92146309b.png"
// email_id: "arpibadejiya@gmail.com"
// name: "arpit"
// position: "TECHNICAL AFFAIRS SECRETARY"
// roll_num: "cs18b0xx"
// _id: "5f26bab7121517001786a932"
