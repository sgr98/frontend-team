import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import 'swiper/css/swiper.css';
import EventsPage from './Components/EventsPage/EventsPage';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import ClubsPage from './Components/ClubsPage/ClubsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <Navigation /> */}

        <Switch>
          {/* <Route path={['/', '/home']} exact component={HomePage} /> */}
          <Route path={['/', '/home']} exact component={ClubsPage} />
          <Route path="/Blogs" exact component={BlogsPage} />
          <Route path="/Events" component={EventsPage} />
          <Route path="/Projects" component={ProjectsPage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
