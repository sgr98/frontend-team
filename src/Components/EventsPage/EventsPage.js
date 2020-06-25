import React from 'react';

import EventsNavbar from './EventsNavbar/EventsNavbar';
import CalendarCarousel from './CalendarCarousel/CalendarCarousel';
import Navigation from '../Navigation/Navigation';
import './EventsPage.css';

const EventsPage = () => (
  <div className="EventsPage">
    {/* <Navigation /> */}
    <EventsNavbar />
    <CalendarCarousel />
  </div>
);

export default EventsPage;
