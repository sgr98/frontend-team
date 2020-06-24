import React from 'react';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import 'swiper/css/swiper.css';
import EventsPage from './Components/EventsPage/EventsPage';

function App() {
  return (
    <div className="App">
      {/* <Navigation />
      <HomePage /> */}
      <EventsPage />
      <Footer />
    </div>
  );
}

export default App;
