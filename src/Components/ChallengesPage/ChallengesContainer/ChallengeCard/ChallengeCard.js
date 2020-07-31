import React from 'react';
import { getDateToBeDisplayed } from '../../../../ReusableFunctions/ReusableFunctions';
import './ChallengeCard.css';

const covertTimeToIST = (eventTime) => {
  let time = eventTime;
  let hours = time[0] + time[1];
  if (hours > 12) {
    hours -= 12;

    time = hours + time.slice(2);

    time += ' PM';
  } else if (hours === '00') {
    time = `12${time.slice(2)}`;
    time += ' AM';
  } else if (hours !== '12') {
    time += ' AM';
  } else {
    time += ' PM';
  }
  return time;
};

const getDates = ({ registration_start, registration_end }) => {
  // Logic for getting date in displaying format

  // start time
  let finalStartString = '';
  let finalEndString = '';

  if (registration_start !== '') {
    const startDate = new Date(registration_start);
    const startDateTime = registration_start.slice(
      registration_start.indexOf('T') + 1,
      registration_start.indexOf('T') + 6
    );
    // After seeing the data from server, time always occur after 'T'
    const startTime = covertTimeToIST(startDateTime);

    const dateToBeDisplayedStart = getDateToBeDisplayed(startDate, false);

    finalStartString = `${dateToBeDisplayedStart} ${startTime}`;
  }

  // end Time

  if (registration_end !== '') {
    const endDate = new Date(registration_end);
    const endDateTime = registration_end.slice(
      registration_end.indexOf('T') + 1,
      registration_end.indexOf('T') + 6
    );
    // After seeing the data from server, time always occur after 'T'
    const endTime = covertTimeToIST(endDateTime);

    const dateToBeDisplayedEnd = getDateToBeDisplayed(endDate, false);

    finalEndString = `${dateToBeDisplayedEnd} ${endTime}`;
  }

  return [finalStartString, finalEndString];
};

const ChallengeCard = ({ data }) => {
  const onClickHandler = () => {
    window.open(data.ref_url, '_blank');
  };

  const [startTime, endTime] = getDates(data);

  return (
    <div className="root-ChallengeCard" onClick={onClickHandler}>
      <p className="title-ChallengeCard">{data.name}</p>
      <p className="description-ChallengeCard">{data.description}</p>
      {/* <a
        href="https://www.hackerrank.com/contests/projecteuler/"
        className="url-ChallengeCard"
      >
        https://www.hackerrank.com/contests/projecteuler/
      </a> */}

      {startTime !== '' ? (
        <div className="timeDiv-ChallengeCard">
          <div className="timePoint-challengeCard">START </div>
          <div className="time-ChallengeCard">{startTime}</div>
        </div>
      ) : null}

      {endTime !== '' ? (
        <div className="timeDiv-ChallengeCard">
          <div className="timePoint-challengeCard">END </div>
          <div className="time-ChallengeCard"> {endTime} </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChallengeCard;
