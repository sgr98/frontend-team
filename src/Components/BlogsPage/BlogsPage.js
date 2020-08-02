/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Article from '../Article/Article';
import axios from 'axios';
import {Spinner} from 'react-bootstrap'
import './BlogsPage.css';
import BlogsContainer from './BlogsContainer/BlogsContainer';
import Navigation from '../Navigation/Navigation';

// import BlogsNavbar from './BlogsNavbar/BlogsNavbar';
import Footer from '../Footer/Footer';

const BlogsPage = () => {
  const { path, url } = useRouteMatch();
  const [loading, setLoading] = useState(true);
  const [clubNames, setClubNames] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/front/clubs`).then((res) => {
      setClubNames(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navigation />
      {loading ? (
          <Spinner className="loadingSpinner" animation="border" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
      ) : (
        <div className="BlogsPage">
          {/* <BlogsNavbar /> */}

          <Switch>
            <Route
              exact
              path={[`${path}/general`, `${path}/`]}
              component={() => <BlogsContainer url={url} clubName="general" />}
            />
            {clubNames.length !== 0
              ? clubNames.map(({ name }) => {
                  return (
                    <Route
                      key={`Route-${name}`}
                      exact
                      path={`${path}/${name}`}
                      component={() => (
                        <BlogsContainer url={url} clubName={name} />
                      )}
                    />
                  );
                })
              : null}
            <Route
              exact
              path={`${path}/:id`}
              component={() => <Article category="blog" />}
            />
          </Switch>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BlogsPage;
