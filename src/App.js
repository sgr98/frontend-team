import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import 'swiper/css/swiper.css';
import EventsPage from './Components/EventsPage/EventsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navigation /> */}

        <Switch>
          <Route path={['/', '/Home']} exact component={HomePage} />
          <Route path="/Events" component={EventsPage} />

          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
