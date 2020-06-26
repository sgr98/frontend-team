import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import EventsNavbar from './EventsNavbar/EventsNavbar';
import CalendarCarousel from './CalendarCarousel/CalendarCarousel';
import Navigation from '../Navigation/Navigation';
import './EventsPage.css';

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
