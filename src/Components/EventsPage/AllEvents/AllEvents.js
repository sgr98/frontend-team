import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../ReusableComponents/Loading/Loading';
import SeparateEvents from '../SeparateEvents';
import Card from '../EventCard/card';
import EventIcon from '../eventsPageLogo.png';

const AllEvents = () => {
  const classStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 2%',
  };

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/events/all`)
      .then((res) => {
        const [upcomingEventsArray, pastEventsArray] = SeparateEvents(
          res.data,
          true
        );
        //console.log(upcomingEventsArray, pastEventsArray);
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
                {' '}
                <img src={EventIcon} alt="Event" />
                Upcoming Events
              </div>
              {upcomingEvents.map((single) => (
                <Card key={single._id} single={single} showButton={true} />
              ))}
            </div>
          ) : null}

          {pastEvents.length !== 0 ? (
            <div>
              <div className="event-card-heading">
                {' '}
                <img src={EventIcon} alt="Event" />
                Past Events
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

export default AllEvents;
