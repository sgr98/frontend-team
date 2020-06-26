



=======
import React, { useState }  from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import EventsNavbar from './EventsNavbar/EventsNavbar';
import CalendarCarousel from './CalendarCarousel/CalendarCarousel';
import Navigation from '../Navigation/Navigation';
import './EventsPage.css';
import Card from "./EventCard/card";


const data = [
  {
    category: "workshop",
    events: [
      {
        type: "Upcoming Workshops",
        events: [
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
        ],
      },
      {
        type: "Past Workshops Showcase",
        events: [
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
          {
            title: "Techmanics Club - NSS Activity",
            topic: "Teaching Robotics to School Children",
            description:
              "Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more",
            date: "Tuesday, 2nd December 2021",
            location: "TC1, Transit Campus ",
            time: "8:00 pm",
            buttonTitle: "Register",
            buttonUrl: "#!",
          },
        ],
      },
    ],
  },
  {
    category: "talk",
    events: [],
  },
  {
    category: "activities",
    events: [],
  },
  {
    category: "competition",
    events: [],
  },
  {
    category: "calender-event",
    events: [],
  },
];


const EventsPage = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="EventsPage">
      <Navigation />
      <EventsNavbar url={url} />
      {/* <CalendarCarousel /> */}
    {data.map(({ events }) =>
        events.map((item, index) => {
          return (
            <div key={index}>
              <div className="event-card-heading">{item.type}</div>
              {item.events.map((single, index) => (
                <Card key={index} single={single} />
              ))}
            </div>
          );
        })
      )}
      <Switch>
        <Route
          path={[`${path}/`, `${path}/AllEvents`]}
          exact
          component={() => <div style={{ color: 'white' }}>All Events</div>}
        />
        <Route
          path={`${path}/Workshops`}
          exact
          component={() => <div style={{ color: 'white' }}>Workshops</div>}
        />
        <Route
          path={`${path}/Talks`}
          exact
          component={() => <div style={{ color: 'white' }}>Talks</div>}
        />
        <Route
          path={`${path}/Activities`}
          exact
          component={() => <div style={{ color: 'white' }}>Activities</div>}
        />
        <Route
          path={`${path}/Competitions`}
          exact
          component={() => <div style={{ color: 'white' }}>Competitions</div>}
        />
        <Route
          path={`${path}/CalendarEvents`}
          exact
          component={CalendarCarousel}
        />
      </Switch>

    </div>
  );
};

export default EventsPage;
