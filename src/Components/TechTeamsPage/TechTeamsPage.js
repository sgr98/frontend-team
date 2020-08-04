import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import './TechTeamsPage.css';
import {Spinner} from 'react-bootstrap'
import TechTeamMembers from './TechTeamMembers/TechTeamMembers';
import TechTeamInfo from './TechTeamInfo/TechTeamInfo';
import CustomHR from '../ReusableComponents/CustomHR/CustomHR';

const TechTeamsPage = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/tech_team/${props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  return (
    <div className="TechTeamsPage">
      <Navigation />
      {loading ? (
        <div className="spinner-c-overlay">
        <div class="row h-100">
            <div class="col-sm-12 my-auto">
                <div class="p-5 mx-auto">
                <Spinner style={{width:"5vmax",height:"5vmax"}} className="loadingSpinner my-auto" animation="border" variant="primary" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                <h1 style={{fontWeight:"bolder"}}>Pumping awesomeness.. Please wait :)</h1>
                </div>
            </div>
        </div>
        </div>
      ) : (
        <>
          <TechTeamInfo data={data} />
          <CustomHR />
          {/* <TechTeamMembers /> */}
        </>
      )}
      <ProjectFooter />
    </div>
  );
};

export default withRouter(TechTeamsPage);
