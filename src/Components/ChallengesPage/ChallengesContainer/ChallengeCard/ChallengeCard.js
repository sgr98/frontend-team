import React from 'react';
import './ChallengeCard.css';

const ChallengeCard = () => {
  return (
    <div className="root-ChallengeCard">
      <p className="title-ChallengeCard">ProjectEuler+</p>
      <p className="description-ChallengeCard">
        {' '}
        HackerRank brings you the fun of solving Projecteuler challenges with
        hidden test cases and time limit
      </p>
      <a
        href="https://www.hackerrank.com/contests/projecteuler/"
        className="url-ChallengeCard"
      >
        https://www.hackerrank.com/contests/projecteuler/
      </a>

      <div className="timeDiv-ChallengeCard">
        <div className="timePoint-challengeCard">START </div>
        <div className="time-ChallengeCard">18th August, 2020, 2:30 a.m. </div>
      </div>
      <div className="timeDiv-ChallengeCard">
        <div className="timePoint-challengeCard">END </div>
        <div className="time-ChallengeCard">20th August, 2020, 2:30 a.m. </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
