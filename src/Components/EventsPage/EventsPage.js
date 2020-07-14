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
import Footer from '../Footer/Footer';

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
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)! ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            image:
              'https://images.unsplash.com/photo-1542936514-33b68fb303c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
            buttonUrl: '#!',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
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
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1523575166472-a83a0ed1d522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80',
          },

          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
    events: [
      {
        type: 'Upcoming Talks',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
          },
        ],
      },
      {
        type: 'Past Talks Showcase',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1544531585-f14f463149ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },

          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
    category: 'activities',
    events: [
      {
        type: 'Upcoming Activities',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1570155308259-f4480a5c3696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
          },

          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1558744037-2f2f6f2fbf6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          },

          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
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
    events: [
      {
        type: 'Upcoming Competitions',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          },

          {
            title: 'Techmaniacs Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          },
        ],
      },
      {
        type: 'Past Competitions Showcase',
        events: [
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1593&q=80',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1538691929598-f3c649a7b92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          },
          {
            title: 'Techmanics Club - NSS Activity',
            topic: 'Teaching Robotics to School Children',
            description:
              'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
            date: 'Tuesday, 2nd December 2021',
            location: 'TC1, Transit Campus ',
            time: '8:00 pm',
            buttonTitle: 'Register',
            buttonUrl: '#!',
            image:
              'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
        ],
      },
    ],
  },
  // {
  //   category: 'calender-event',
  //   events: [],
  // },
];

const EventsPage = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
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
      <Footer />
    </>
  );
};

export default EventsPage;
