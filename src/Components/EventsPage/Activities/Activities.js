import React from 'react';
import Card from '../EventCard/card';
import EventIcon from '../eventsPageLogo.png';

const Activities = (props) => {
  let eventCategory = null;
  eventCategory = props.data.filter((event) => {
    return event.category === 'activities';
  });
  const classStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 2%',
  };
  return (
    <div style={classStyle}>
      {eventCategory[0].events.map((item, index) => {
        return (
          <div key={index}>
            <div className="event-card-heading">
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
        );
      })}
    </div>
  );
};

export default Activities;
