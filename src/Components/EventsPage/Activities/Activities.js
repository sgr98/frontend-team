import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../ReusableComponents/Loading/Loading';
import SeparateEvents from '../SeparateEvents';
import Card from '../EventCard/card';
import EventIcon from '../eventsPageLogo.png';

const Activities = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const classStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 2%',
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/events/activity`)
      .then((res) => {
        console.log(res);
        const [upcomingEventsArray, pastEventsArray] = SeparateEvents(res.data);
        console.log(upcomingEventsArray, pastEventsArray);
        setPastEvents(pastEventsArray);
        setUpcomingEvents(upcomingEventsArray);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Loading show={loading} />
      {loading ? (
        <></>
      ) : (
        <div style={classStyle}>
          {upcomingEvents.length !== 0 ? (
            <div>
              <div className="event-card-heading">
                <img src={EventIcon} alt="Event" />
                Upcoming Activities
              </div>
              {upcomingEvents.map((single) => (
                <Card key={single._id} single={single} showButton />
              ))}
            </div>
          ) : null}

          {pastEvents.length !== 0 ? (
            <div>
              <div className="event-card-heading">
                <img src={EventIcon} alt="Event" />
                Past Activities Showcase
              </div>
              {pastEvents.map((single) => (
                <Card key={single._id} single={single} showButton={false} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Activities;
