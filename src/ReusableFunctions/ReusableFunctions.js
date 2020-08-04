export const covertTimeToIST = (eventTime) => {
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

export function getDateToBeDisplayed(date, isDayNameRequired = true) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  let dateString = '';

  if (isDayNameRequired) {
    dateString = `${days[date.getDay()]}, ${date.getDate()}`;
  } else {
    dateString = `${date.getDate()}`;
  }

  const dateNumber = date.getDate();

  if (dateNumber % 10 === 1 && dateNumber !== 11) dateString += 'st';
  else if (dateNumber % 10 === 2 && dateNumber !== 12) dateString += 'nd';
  else if (dateNumber % 10 === 3 && dateNumber !== 13) dateString += 'rd';
  else dateString += 'th';

  dateString += ` ${months[date.getMonth()]} ${date.getFullYear()}`;

  return dateString.toUpperCase();
}

export function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
}
