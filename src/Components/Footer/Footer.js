/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillFacebook, AiFillMediumCircle } from 'react-icons/ai';

const Footer = () => (
  <div className="footer">
    {/* <div className="above">
      <div className="b" />
      <div className="f" />
      <div className="i" />
      <div className="left" />
      <div className="right" />
    </div>

    <div className="above-nxt">
      <div className="leftspace" />
      <div className="b-n" />
      <div className="mid-space" />
      <div className="f-n" />
      <div className="mid-space" />
      <div className="i-n" />
      <div className="rightspace" />
    </div> */}
    <Container fluid style={{ height: '1px' }} className="top-div-Footer">
      <Row>
        <Col xs={2} md={1} style={{ padding: '0px' }}>
          <Container style={{ height: '100%' }} fluid>
            <Row style={{ height: '100%' }}>
              <Col xs={4} className="logo1-Top-Footer" />
              <Col xs={4} className="logo2-Footer" />
              <Col xs={4} className="logo3-Footer" />
            </Row>
          </Container>
        </Col>

        <Col
          xs={5}
          md={5}
          style={{
            padding: '0px',
            background: '#5C2E91',
          }}
        />
        <Col
          xs={5}
          md={6}
          style={{
            padding: '0px',
            background: '#5C015C',
          }}
        />
      </Row>
    </Container>

    <div className="middle-Desktop">
      <Container fluid>
        <Row>
          <Col className="quick">
            <p>Quick access</p>
          </Col>

          <Col className="home">
            <p>Home</p>
            <p>About</p>
            <p>Club</p>
            <p>Achievements</p>
          </Col>

          <Col className="home">
            <p>Featured</p>
            <p>Ideology</p>
            <p>Digital Wizards</p>
            <p>Risha lab</p>
          </Col>

          <Col className="home">
            <p>Announcements</p>
            <p>Club heads</p>
            <p>Techmaniacs</p>
            <p>Inter IIT Tech Meet</p>
          </Col>

          <Col className="home">
            <p>Past Activities</p>
            <p>Tech info</p>
            <p>Gagan Vedhi</p>
            <p>Ongoing Projects</p>
          </Col>

          <Col className="home">
            <p>Upcoming Activities</p>
            <p>Facilities</p>
            <p>Automobiles club</p>
            <p>Challenges</p>
          </Col>

          <Col className="home">
            <p>Upcoming Talks</p>
            <p>Idea Square</p>
            <p>3D printing club</p>
            <p>FAQs</p>
          </Col>

          <Col className="home">
            <p>Upcoming Workshops</p>
            <p>Web Team</p>
            <p>CNC Club</p>
          </Col>

          <Col className="home">
            <p>Calender Activities</p>

            <p>Amphibians</p>
          </Col>
        </Row>
      </Container>
    </div>
    {/* 
    <div className="middle-Mobile">
      <Container fluid>
        <Row>
          <Col className="links-Mobile">
            <p>Home</p>
          </Col>
          <Col className="links-Mobile">
            <p>About</p>
          </Col>
          <Col className="links-Mobile">
            <p>Clubs</p>
          </Col>
          <Col className="links-Mobile">
            <p>Achievements</p>
          </Col>
          <Col className="links-Mobile">
            <p>Ongoing Projects</p>
          </Col>
          <Col className="links-Mobile">
            <p>Challenges</p>
          </Col>
          <Col className="links-Mobile">
            <p>FAQs</p>
          </Col>
        </Row>
      </Container>
    </div> */}
    <div className="Hidden-Footer">
      <p>Home</p>
      <p>About</p>
      <p>Clubs</p>
      <p>Achievements</p>
      <p>Ongoing Projects</p>
      <p>Challenges</p>
      <p>FAQs</p>
    </div>

    <Container fluid className="bottom-Footer-Desktop">
      <Row>
        <Col xs={2} md={1} style={{ padding: '0px' }}>
          <Container style={{ height: '100%' }} fluid>
            <Row style={{ height: '100%' }}>
              <Col xs={4} className="logo1-Footer">
                <a
                  className="icons-Footer"
                  href="https://medium.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillMediumCircle color="white" size="1em" />
                </a>
              </Col>
              <Col xs={4} className="logo2-Footer">
                <a
                  href="https://www.facebook.com/"
                  className="icons-Footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillFacebook color="white" size="1em" />
                </a>
              </Col>
              <Col xs={4} className="logo3-Footer">
                <a
                  href="https://www.instagram.com/"
                  className="icons-Footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram color="white" size="1em" />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col
          xs={5}
          md={5}
          style={{
            padding: '0px',
            background: '#5C2E91',
            display: 'flex',

            justifyContent: 'center',
          }}
        >
          <p className="techHub-Footer"> TechHub IIT Tirupati</p>
        </Col>
        <Col
          xs={5}
          md={6}
          style={{
            padding: '0px',
            background: '#5C015C',
            display: 'flex',

            justifyContent: 'center',
          }}
        >
          <p className="ideaSquare-Footer">
            ©2020 IdeaSquare. All rights reserved
          </p>
        </Col>
      </Row>
    </Container>

    <Container fluid className="bottom-Footer-Mobile">
      <Row>
        <Col xs={4} md={1} style={{ padding: '0px' }}>
          <Container style={{ height: '100%' }} fluid>
            <Row style={{ height: '100%' }}>
              <Col xs={4} className="logo1-Footer">
                <a
                  className="icons-Footer"
                  href="https://medium.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillMediumCircle color="white" size="1.3em" />
                </a>
              </Col>
              <Col xs={4} className="logo2-Footer">
                <a
                  href="https://www.facebook.com/"
                  className="icons-Footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillFacebook color="white" size="1.3em" />
                </a>
              </Col>
              <Col xs={4} className="logo3-Footer">
                <a
                  href="https://www.instagram.com/"
                  className="icons-Footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram color="white" size="1.3em" />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col
          xs={8}
          md={6}
          style={{
            padding: '0px',
            background: '#5C015C',
            display: 'flex',

            justifyContent: 'center',
          }}
        >
          <p className="ideaSquare-Footer">
            ©2020 IdeaSquare. All rights reserved
          </p>
        </Col>
      </Row>
    </Container>

    {/* <div className="footer-top">
      <div className="segment-one">
        <a href="https://mobile.twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className="segment-onee">
        <a href="https://www.facebook.com/">
          <AiOutlineFacebook />
        </a>
      </div>
      <div className="segment-oneee">
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </div>

      <div>
        <h3 className="segment-two"> TechHubIIT TIRUPATI</h3>
      </div>

      <div>
        <h3 className="segment-three">© 2020 IdeaSquare.All rights reserved</h3>
      </div>
    </div> */}

    {/* <div className="App-footer">
      <div className="segment-one">
        <a href="#">
          <FaTwitter color="white" />
        </a>
      </div>
      <div className="segment-onee">
        <a href="https://www.facebook.com/">
          <AiOutlineFacebook color="white" />
        </a>
      </div>
      <div className="segment-oneee">
        <a href="https://instagram.com">
          <FaInstagram color="white" />
        </a>
      </div>

      <div>
        <h3 className="segment-three">
          © 2020 IdeaSquare. All rights reserved
        </h3>
      </div>
    </div> */}
  </div>
);

export default Footer;
