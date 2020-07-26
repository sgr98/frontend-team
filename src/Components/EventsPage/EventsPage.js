import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import EventsNavbar from './EventsNavbar/EventsNavbar';
import EventsLinkDropdown from './EventsNavbar/EventsLinkDropdown';
import CalendarCarousel from './CalendarCarousel/CalendarCarousel';
import Navigation from '../Navigation/Navigation';
import './EventsPage.css';
import AllEvents from './AllEvents/AllEvents';
import Workshops from './Workshops/Workshops';
import Talks from './Talks/Talks';
import Activities from './Activities/Activities';
import Competitions from './Competitions/Competitions';
import Footer from '../Footer/Footer';

const EventsPage = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <div className="EventsPage">
        <Navigation />

        <EventsNavbar url={url} />
        {/* <CalendarCarousel /> */}
        <EventsLinkDropdown />
        <Switch>
          <Route
            path={[`${path}/`, `${path}/AllEvents`]}
            exact
            component={() => <AllEvents />}
          />
          <Route
            path={`${path}/Workshops`}
            exact
            component={() => <Workshops />}
          />
          <Route path={`${path}/Talks`} exact component={() => <Talks />} />
          <Route
            path={`${path}/Activities`}
            exact
            component={() => <Activities />}
          />
          <Route
            path={`${path}/Competitions`}
            exact
            component={() => <Competitions />}
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
