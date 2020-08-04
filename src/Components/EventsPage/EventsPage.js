import React from 'react';
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
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';

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
            component={() => (
              <>
                <EventsLinkDropdown url={url} currentSelected="All Events" />
                <AllEvents />
              </>
            )}
          />
          <Route
            path={`${path}/Workshops`}
            exact
            component={() => (
              <>
                <EventsLinkDropdown url={url} currentSelected="Workshops" />
                <Workshops />
              </>
            )}
          />
          <Route
            path={`${path}/Talks`}
            exact
            component={() => (
              <>
                <EventsLinkDropdown url={url} currentSelected="Talks" />
                <Talks />
              </>
            )}
          />
          <Route
            path={`${path}/Activities`}
            exact
            component={() => (
              <>
                <EventsLinkDropdown url={url} currentSelected="Activities" />
                <Activities />
              </>
            )}
          />
          <Route
            path={`${path}/Competitions`}
            exact
            component={() => (
              <>
                <EventsLinkDropdown url={url} currentSelected="Competitions" />
                <Competitions />
              </>
            )}
          />
          <Route
            path={`${path}/CalendarEvents`}
            exact
            component={CalendarCarousel}
          />
        </Switch>
      </div>
      <ProjectFooter />
    </>
  );
};

export default EventsPage;
