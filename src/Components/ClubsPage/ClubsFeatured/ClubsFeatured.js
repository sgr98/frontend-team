import React, { Fragment } from "react";
import "./ClubsFeautured.css";
import {Spinner} from 'react-bootstrap'
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClubsFeatured = ({ data, clubName }) => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <Fragment>
      {data ? (
        <div className="ClubsFeatured-container">
          <div className="ClubsFeatured-content">
            <div className="ClubsFeatured-title">
              {data["Club name"] ? data["Club name"] : "Club Name"}
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
              <span className="ClubsFeatured-button">Projects</span>
              <span className="ClubsFeatured-button">Blogs</span>
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
                      data["Club logo_url"]
                        ? `${process.env.REACT_APP_BASE_URL}/images/${data["Club logo_url"]}`
                        : "https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                    }
                  />
                  <div className="ClubsFeatured-image-content-details fadeIn-bottom">
                    <div className="center">
                      <span className="ClubsFeatured-overlay-title">
                        Connect with us on social media ❤
                      </span>
                      {data && data["Club Instagram page"] ? (
                        <a
                          className="ClubsFeatured-overlay-social"
                          href={data["Club Instagram page"]}
                          target="_blank"
                        >
                          <span>
                            <FaInstagram color="orange" /> Instagram
                          </span>
                        </a>
                      ) : null}
                      {data && data["Club Github page"] ? (
                        <a
                          className="ClubsFeatured-overlay-social"
                          href={data["Club Github page"]}
                          target="_blank"
                        >
                          <span>
                            <FaGithub /> Github
                          </span>
                        </a>
                      ) : null}
                      {data && data["Club Youtube channel"] ? (
                        <a
                          className="ClubsFeatured-overlay-social"
                          href={data["Club Youtube channel"]}
                          target="_blank"
                        >
                          <span>
                            <FaYoutube color="red" /> Youtube
                          </span>
                        </a>
                      ) : null}
                      <a
                        className="ClubsFeatured-overlay-social"
                        href={
                          data
                            ? `/frontend-team#/clubs/${data["Club name"]}/gallery`
                            : ""
                        }
                      >
                        <span>View Gallery</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ClubsFeatured-frame-logo">
                  <FaGithub color="white" />
                  <div>
                    <FaInstagram color="orange" />
                    <span style={{ marginRight: "4px" }}></span>
                    <FaYoutube color="red" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-c-overlay">
        <div className="row h-100">
            <div className="col-sm-12 my-auto">
                <div className="p-5 mx-auto">
                <Spinner style={{width:"5vmax",height:"5vmax"}} className="loadingSpinner my-auto" animation="border" variant="primary" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                <h1 style={{fontWeight:"bolder"}}>Pumping awesomeness.. Please wait :)</h1>
                </div>
            </div>
        </div>
        </div>
      )}
    </Fragment>
  );
};

export default ClubsFeatured;
