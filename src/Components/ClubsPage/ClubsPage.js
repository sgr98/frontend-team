import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClubsTeamInfo from './ClubsTeamInfo/ClubsTeamInfo';
import ClubsHighlights from './ClubsHighlights/ClubsHighlights';
import ClubsNavbar from './ClubsNavbar/ClubsNavbar';

import ClubsFeatured from './ClubsFeatured/ClubsFeatured';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';

const ClubsPage = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/club/${props.match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  return (
    <div>
      <ClubsNavbar />
      {loading ? (
        <h1>Loading..</h1>
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
