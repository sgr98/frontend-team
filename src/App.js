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
import AchievementsPage from './Components/AchievementsPage/AchievementsPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Article from './Components/Article/Article';
import ChallengesPage from './Components/ChallengesPage/ChallengesPage';
import GalleryPage from './Components/ClubsPage/GalleryPage/GalleryPage';
import WebTeamPage from './Components/WebTeamPage/WebTeamPage';
import TechTeamsPage from './Components/TechTeamsPage/TechTeamsPage';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <Navigation /> */}

        <Switch>
          <Route path={['/', '/home']} exact component={HomePage} />
          <Route path="/clubs" component={ClubsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/Blogs" component={BlogsPage} />
          <Route path="/Events" component={EventsPage} />

          <Route
            path="/Projects/:id"
            exact
            component={() => <Article category="project" />}
          />
          <Route path="/Projects" exact component={ProjectsPage} />

          <Route path="/Achievements" component={AchievementsPage} />
          <Route path="/TechnicalCommittee" component={AboutUs} />

          <Route path="/article" component={Article} />
          <Route path="/Challenges" component={ChallengesPage} />
          <Route path="/WebTeam" component={WebTeamPage} />
          <Route path="/TechTeam/:id" component={TechTeamsPage} />
          <Route component={() => <h1>ERROR</h1>} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default App;
