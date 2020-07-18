import { getDateToBeDisplayed } from '../../ReusableFunctions/ReusableFunctions';

const covertTimeToIST = (time) => {
  let hours = time[0] + time[1];
  if (hours > 12) {
    hours = hours - 12;
    // console.log(time, hours);
    time = hours + time.slice(2);

    time += ' PM';
  } else if (hours === '00') {
    time = '12' + time.slice(2);
    time += ' AM';
  } else {
    if (hours !== '12') {
      time += ' AM';
    } else {
      time += ' PM';
    }
  }
  return time;
};

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
        const eventTimeString = event.date.slice(
          event.date.indexOf('T') + 1,
          event.date.indexOf('T') + 6
        );
        const eventTime = covertTimeToIST(eventTimeString);

        // console.log(
        //   event.date.slice(
        //     event.date.indexOf('T') + 1,
        //     event.date.indexOf('T') + 6
        //   ),
        //   eventDate
        // );

        const dateToBeDisplayed = getDateToBeDisplayed(eventDate);

        const eventData = { ...event };

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
