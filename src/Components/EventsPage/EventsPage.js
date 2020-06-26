import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import EventsNavbar from './EventsNavbar/EventsNavbar';
import CalendarCarousel from './CalendarCarousel/CalendarCarousel';
import Navigation from '../Navigation/Navigation';
import './EventsPage.css';
import AllEvents from './AllEvents/AllEvents';
import Workshops from './Workshops/Workshops';
import Talks from './Talks/Talks';
import Activities from './Activities/Activities';
import Competitions from './Competitions/Competitions';

const data = [
  {
    category: 'workshop',
    events: [
      {
        type: 'Upcoming Workshops',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmaniacs Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
        ],
      },
      {
        type: 'Past Workshops Showcase',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
        ],
      },
    ],
  },
  {
    category: 'talk',
    events: [],
  },
  {
    category: 'activities',
    events: [
      {
        type: 'Upcoming Activities',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },

          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
        ],
      },
      {
        type: 'Past Activities Showcase',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },

          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ...Read more',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
        ],
      },
    ],
  },
  {
    category: 'competition',
    events: [],
  },
  // {
  //   category: 'calender-event',
  //   events: [],
  // },
];

const EventsPage = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="EventsPage">
      <Navigation />
      <EventsNavbar url={url} />
      {/* <CalendarCarousel /> */}

      <Switch>
        <Route
          path={[`${path}/`, `${path}/AllEvents`]}
          exact
          component={() => <AllEvents data={data} />}
        />
        <Route
          path={`${path}/Workshops`}
          exact
          component={() => <Workshops data={data} />}
        />
        <Route
          path={`${path}/Talks`}
          exact
          component={() => <Talks data={data} />}
        />
        <Route
          path={`${path}/Activities`}
          exact
          component={() => <Activities data={data} />}
        />
        <Route
          path={`${path}/Competitions`}
          exact
          component={() => <Competitions data={data} />}
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
