import React, { useState } from 'react';
import './TechTeamInfo.css';
import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';

function TechTeamInfo() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="TechTeamInfo-container">
      <div className="TechTeamInfo-content">
        <div className="TechTeamInfo-title">TECHMANIACS</div>
        <div className="TechTeamInfo-subtitle">
          The Electronics and Robotics Club of IIT Tirupati
        </div>
        <div className="TechTeamInfo-description">
          The Robotics and Electronics club was formed in 1.5008, with a vision
          to raise the level of Robotics in the institute to an international
          standard by developing an integrated knowledge base in the field of
          Robotics. It is one of the most active clubs in CFI, comprising of 600
          members from all years. The Robotics and Electronics club is striving
          to inspire and enable the students to explore their creativity and
          engineering skills through robotics by engaging them in exciting
          mentor based program which teaches them both technical skills,
          teamwork and leadership. iBot club is not leaving any stone unturned
          in the process of becoming a self-sustained student robotics hub.
        </div>
        {readMore ? (
          <>
            <div className="TechTeamInfo-title">TECHMANIACS</div>
            <div className="TechTeamInfo-subtitle">
              The Electronics and Robotics Club of IIT Tirupati
            </div>
            <div className="TechTeamInfo-description">
              The Robotics and Electronics club was formed in 1.5008, with a
              vision to raise the level of Robotics in the institute to an
              international standard by developing an integrated knowledge base
              in the field of Robotics. It is one of the most active clubs in
              CFI, comprising of 600 members from all years. The Robotics and
              Electronics club is striving to inspire and enable the students to
              explore their creativity and engineering skills through robotics
              by engaging them in exciting mentor based program which teaches
              them both technical skills, teamwork and leadership. iBot club is
              not leaving any stone unturned in the process of becoming a
              self-sustained student robotics hub.
            </div>
            <div className="TechTeamInfo-title">TECHMANIACS</div>
            <div className="TechTeamInfo-subtitle">
              The Electronics and Robotics Club of IIT Tirupati
            </div>
            <div className="TechTeamInfo-description">
              The Robotics and Electronics club was formed in 1.5008, with a
              vision to raise the level of Robotics in the institute to an
              international standard by developing an integrated knowledge base
              in the field of Robotics. It is one of the most active clubs in
              CFI, comprising of 600 members from all years. The Robotics and
              Electronics club is striving to inspire and enable the students to
              explore their creativity and engineering skills through robotics
              by engaging them in exciting mentor based program which teaches
              them both technical skills, teamwork and leadership. iBot club is
              not leaving any stone unturned in the process of becoming a
              self-sustained student robotics hub.
            </div>
          </>
        ) : null}
        <div className="TechTeamInfo-links">
          <span
            className="TechTeamInfo-button"
            onClick={() => setReadMore(!readMore)}
          >
            {!readMore ? 'Read More About Us' : 'Show Less'}
          </span>
          <span className="TechTeamInfo-button">Projects</span>
          <span className="TechTeamInfo-button">Resources</span>
          <span className="TechTeamInfo-button">Blogs</span>
        </div>
      </div>

      <div className="TechTeamInfo-parent">
        <div className="TechTeamInfo-image">
          <div className="TechTeamInfo-image-container">
            <div className="TechTeamInfo-image-content">
              <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                <div className="TechTeamInfo-image-content-overlay"></div>
                <img
                  className="TechTeamInfo-image-content-image"
                  src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                />
                <div className="TechTeamInfo-image-content-details fadeIn-bottom">
                  <div className="center">
                    <span className="TechTeamInfo-overlay-title">
                      connect with us on social media ❤
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      <FaInstagram color="orange" /> Instagram
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      <FaGithub /> Github
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      <FaYoutube color="red" /> Youtube
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      View Gallery
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="TechTeamInfo-frame-logo">
              <FaGithub color="white" />
              <div>
                <FaInstagram color="orange" />
                <span style={{ marginRight: '4px' }}></span>
                <FaYoutube color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechTeamInfo;
