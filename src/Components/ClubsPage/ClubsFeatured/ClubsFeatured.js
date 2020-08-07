import React, { Fragment } from 'react';
import './ClubsFeautured.css';
import Loading from '../../ReusableComponents/Loading/Loading';
import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ClubsFeatured = ({ data, clubName }) => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      {data ? (
        <div className="ClubsFeatured-container">
          <div className="ClubsFeatured-content">
            <div className="ClubsFeatured-title">
              {data['Club name'] ? data['Club name'] : 'Club Name'}
            </div>
            {/* <div className="ClubsFeatured-subtitle">
              {data["Club Description"]
                ? data["Club Description"]
                : "Club Description"}
            </div> */}
            <div className="ClubsFeatured-links">
              <Link className="ClubsFeatured-button" to={`${clubName}/about`}>
                About Us
              </Link>
              <a
                href={data.resources}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
                className="ClubsFeatured-button"
              >
                Resources
              </a>

              <Link className="ClubsFeatured-button" to={`/blogs/${clubName}`}>
                Blogs
              </Link>
            </div>
          </div>

          <div className="ClubsFeatured-parent">
            <div className="ClubsFeatured-image">
              <div className="ClubsFeatured-image-container">
                <div className="ClubsFeatured-image-content">
                  <div className="ClubsFeatured-image-content-overlay"></div>
                  <img
                    className="ClubsFeatured-image-content-image"
                    src={
                      data['Club logo_url']
                        ? `${process.env.REACT_APP_BASE_URL}/images/${data['Club logo_url']}`
                        : 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
                    }
                  />
                  <div className="ClubsFeatured-image-content-details fadeIn-bottom">
                    <div className="center">
                      <span className="ClubsFeatured-overlay-title">
                        Connect with us on social media ❤
                      </span>
                      {data && data['Club Instagram page'] ? (
                        <a
                          className="ClubsFeatured-overlay-social"
                          href={data['Club Instagram page']}
                          target="_blank" rel="noopener noreferrer"
                        >
                          <span>
                            <FaInstagram color="orange" /> Instagram
                          </span>
                        </a>
                      ) : null}
                      {data && data['Club Github page'] ? (
                        <a
                          className="ClubsFeatured-overlay-social"
                          href={data['Club Github page']}
                          target="_blank" rel="noopener noreferrer"
                        >
                          <span>
                            <FaGithub /> Github
                          </span>
                        </a>
                      ) : null}
                      {data && data['Club Youtube channel'] ? (
                        <a
                          className="ClubsFeatured-overlay-social"
                          href={data['Club Youtube channel']}
                          target="_blank" rel="noopener noreferrer"
                        >
                          <span>
                            <FaYoutube color="red" /> Youtube
                          </span>
                        </a>
                      ) : null}
                      <Link
                        className="ClubsFeatured-overlay-social"
                        to={`${data['Club name']}/gallery`}
                      >
                        <span>View Gallery</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="ClubsFeatured-frame-logo">
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ClubsFeatured;
