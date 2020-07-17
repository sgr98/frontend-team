import { getDateToBeDisplayed } from '../../ReusableFunctions/ReusableFunctions';

export default function SeparateEvents(data, CalledFromAllEvents) {
  const upcomingEventsArray = [];
  const pastEventsArray = [];
  const currentDate = new Date();
  const categories = Object.keys(data);

  if (CalledFromAllEvents) {
    //  When this functions is called from AllEvents

    categories.forEach((key) => {
      const Events = data[key];
      Events.forEach((event) => {
        const eventDate = new Date(event.date);

        const dateToBeDisplayed = getDateToBeDisplayed(eventDate);

        const eventData = { ...event };

        const eventTime = `${eventDate.getHours()}:${eventDate.getMinutes()}`;
        eventData.date = dateToBeDisplayed;
        eventData.time = eventTime;

        if (eventDate < currentDate) {
          pastEventsArray.push(eventData);
        } else {
          upcomingEventsArray.push(eventData);
        }
      });
    });
  } else {
    data.forEach((event) => {
      const eventDate = new Date(event.date);

      const dateToBeDisplayed = getDateToBeDisplayed(eventDate);

      const eventData = { ...event };

      const eventTime = `${eventDate.getHours()}:${eventDate.getMinutes()}`;
      eventData.date = dateToBeDisplayed;
      eventData.time = eventTime;

      if (eventDate < currentDate) {
        pastEventsArray.push(eventData);
      } else {
        upcomingEventsArray.push(eventData);
      }
    });
  }
  return [upcomingEventsArray, pastEventsArray];
}
