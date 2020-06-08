import React from 'react';

import './Calendar.css';
import { Table } from 'react-bootstrap';

const Calendar = (props) => {
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
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month).getDay();
  const monthName = months[month];

  const cells = [];
  let currDay = 1;
  let foundWeekDay = false;

  for (let i = 0; i < 5; i += 1) {
    const rowEl = [];

    for (let j = 0; j < 7; j += 1) {
      if (!foundWeekDay) {
        if (j === firstDay && currDay <= monthDays[month]) {
          foundWeekDay = true;
        }
      } else {
        currDay += 1;
        if (currDay > monthDays[month]) {
          foundWeekDay = false;
        }
      }
      let eventCell = null;
      if (foundWeekDay) {
        for (let k = 0; k < props.events.length; k++) {
          if (props.events[k].date === currDay) {
            eventCell = (
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <img
                  style={{ height: '100%' }}
                  className="d-block w-100"
                  src={props.events[k].image}
                  alt="event"
                />
                <span
                  className="date-calendar"
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0.3rem',
                  }}
                >
                  {currDay}
                </span>
              </div>
            );
            break;
          }
        }
      }
      let cellClassName = 'cell-calendar';
      if (i === 0) {
        cellClassName += ' top-row';
      } else if (i === 4) {
        cellClassName += ' bottom-row';
      }

      rowEl.push(
        <td key={`td${i}${j}`} style={{ padding: '0' }}>
          <div className={cellClassName}>
            {!foundWeekDay ? (
              <div className="border-div-calendar-no-hover">
                <div className="not-present-month" />
              </div>
            ) : (
              <div className="border-div-calendar">
                {eventCell || (
                  <div className="no-event-cell">
                    <span
                      className="date-calendar"
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0.3rem',
                      }}
                    >
                      {currDay}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </td>
      );
    }

    const oneRow = <tr key={`td${i}`}>{rowEl}</tr>;
    cells.push(oneRow);
  }

  return (
    <div className="calendar-container">
      <p className="heading-calendar">Calendar Activities</p>
      <p className="month-name-calendar">
        {`${monthName.toUpperCase()} ${year}`}
      </p>

      <div className="table-calendar">
        <Table borderless>
          <thead>
            <tr style={{ color: ' #A19F9D' }}>
              <th className="th-calendar">Sunday</th>
              <th className="th-calendar">Monday</th>
              <th className="th-calendar">Tuesday</th>
              <th className="th-calendar">Wednesday</th>
              <th className="th-calendar">Thursday</th>
              <th className="th-calendar">Friday</th>
              <th className="th-calendar">Saturday</th>
            </tr>
          </thead>

          <tbody
            style={{
              border: '3px solid #8F7FC6',
            }}
          >
            {cells}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Calendar;
