/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import './BlogsPage.css';
import BlogsContainer from './BlogsContainer/BlogsContainer';
import Navigation from '../Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';
// import BlogsNavbar from './BlogsNavbar/BlogsNavbar';
import Footer from '../Footer/Footer';

const BlogsPage = () => {
  const { path, url } = useRouteMatch();

  const [clubNames, setClubNames] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/front/clubs`).then((res) => {
      setClubNames(res.data);
    });
  }, []);

  return (
    <>
      <div className="BlogsPage">
        <Navigation />
        {/* <BlogsNavbar /> */}
        <SearchBar url={url} />
        <BlogsContainer />
        <Switch>
          {clubNames.length !== 0
            ? clubNames.map(({ name }) => {
                return (
                  <Route
                    path={`${path}/Workshops`}
                    exact
                    component={() => <BlogsContainer clubName={name} />}
                  />
                );
              })
            : null}
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;
