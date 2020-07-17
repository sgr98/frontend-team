export function getDateToBeDisplayed(date) {
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

  let dateString = `${days[date.getDay()]}, ${date.getDate()}`;

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
