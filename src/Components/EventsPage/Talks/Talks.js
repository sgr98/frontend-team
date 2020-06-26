import React from 'react';
import Card from '../EventCard/card';
import EventIcon from '../eventsPageLogo.png';

const Talks = (props) => {
  let eventCategory = null;
  eventCategory = props.data.filter((event) => {
    return event.category === 'talk';
  });
  const classStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 2%',
  };
  return (
    <div className={classStyle}>
      {eventCategory[0].events.map((item, index) => (
        <div key={index}>
          <div className="event-card-heading">
            <img src={EventIcon} alt="Event" />
            {item.type}
          </div>
          {item.events.map((single, index) => (
            <Card key={index} single={single} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Talks;
