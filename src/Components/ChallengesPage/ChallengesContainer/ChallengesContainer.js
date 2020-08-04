/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// import {Spinner} from 'react-bootstrap'
import './ChallengesContainer.css';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import Spinner from './Spinner';

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
        // <h1>Loading</h1>
        <Spinner />
      ) : challenges.length !== 0 ? (
        challenges.map((data) => <ChallengeCard key={data.name} data={data} />)
      ) : (
        <h1>No Challenges Found :(</h1>
      )}
    </div>
  );
};

export default withRouter(ChallengesContainer);
