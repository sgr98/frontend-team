import React from 'react';
import Card from '../EventCard/card';
import EventIcon from '../eventsPageLogo.png';

const AllEvents = (props) => {
  const classStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 2%',
  };
  return (
    <div style={classStyle}>
      {props.data.map(({ events }) =>
        events.map((item, index) => (
          <div key={index}>
            <div className="event-card-heading">
              {' '}
              <img src={EventIcon} alt="Event" />
              {item.type}
            </div>
            {item.events.map((single, index_event) => (
              <Card
                key={index_event}
                single={single}
                showButton={index === 0}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default AllEvents;