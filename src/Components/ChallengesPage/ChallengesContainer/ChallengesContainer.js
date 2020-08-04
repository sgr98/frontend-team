/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {Spinner} from 'react-bootstrap'
import './ChallengesContainer.css';
import ChallengeCard from './ChallengeCard/ChallengeCard';

const ChallengesContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/challenges/${props.match.params.category}`
      )
      .then((res) => {
        console.log(res.data);
        setChallenges(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.category]);

  return (
    <div className="root-ChallengesContainer">
      {loading ? (
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
      ) : challenges.length !== 0 ? (
        challenges.map((data) => <ChallengeCard key={data.name} data={data} />)
      ) : (
        <h1>No Challenges Found :(</h1>
      )}
    </div>
  );
};

export default withRouter(ChallengesContainer);
