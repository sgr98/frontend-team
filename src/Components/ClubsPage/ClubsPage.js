import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import ClubsTeamInfo from './ClubsTeamInfo/ClubsTeamInfo';
import ClubsHighlights from './ClubsHighlights/ClubsHighlights';
import ClubsNavbar from './ClubsNavbar/ClubsNavbar';

import ClubsFeatured from './ClubsFeatured/ClubsFeatured';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';

const ClubsPage = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clubName, setClubName] = useState('');

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/club/${props.match.params.id}`
      )
      .then((res) => {
        setClubName(props.match.params.id);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  useEffect(() => {
    if (!loading) {
      if (props.location.hash !== '') {
        document.getElementById('OurTeam').scrollIntoView();
      }
    }
  }, [loading, props.location.hash]);

  return (
    <div>
      <ClubsNavbar clubName={clubName} />
      {loading ? (
        <div className="spinner-c-overlay">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <div className="p-5 mx-auto">
                <Spinner
                  style={{ width: '5vmax', height: '5vmax' }}
                  className="loadingSpinner my-auto"
                  animation="border"
                  variant="primary"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
                <h1 style={{ fontWeight: 'bolder' }}>
                  Pumping awesomeness.. Please wait :)
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ClubsFeatured data={data} clubName={props.match.params.id} />
          <ClubsHighlights blogs={data['Blogs']} events={data['Events']} />
          <ClubsTeamInfo
            members={
              data['Member details'].length !== 0
                ? data['Member details'][0]['members']
                : []
            }
            headDetails={{
              name: data['Club Head name'],
              position: 'Club Head',
              dp_url: data['Club Head dp_url'],
              roll_num: data['Club Head roll_num'],
              contact: data['Club Head contact'],
              email_id: data['Club Head email_id'],
            }}
          />
        </>
      )}

      <ProjectFooter />
    </div>
  );
};

export default ClubsPage;
