import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './ChallengesPage.css';
import { Spinner } from 'react-bootstrap';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ChallengesContainer from './ChallengesContainer/ChallengesContainer';
import ChallengesDropdown from './ChallengesContainer/ChallengesDropdown/ChallengesDropdown';
// import Spinner from './ChallengesContainer/Spinner';

const ChallengesPage = () => {
  const [categoryNames, setCategoryNames] = useState(['all', 'electrical']);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/categories/challenge?all=1`)
      .then((res) => {
        setCategoryNames(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="ChallengesPage">
        {loading ? (
          <div className="spinner-c-overlay">
            <div className="row h-100">
              <div className="col-sm-12 my-auto">
                <div className="p-5 mx-auto">
                  <Spinner
                    style={{ width: '5vmax', height: '5vmax' }}
                    className="loadingSpinner my-auto"
                    animation="border"
                    variant="primary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <h1 style={{ fontWeight: 'bolder' }}>
                    Pumping awesomeness.. Please wait :)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Route
            path="/Challenges/:category"
            exact
            component={() => (
              <>
                <ChallengesDropdown categoryNames={categoryNames} />
                <ChallengesContainer />
              </>
            )}
          />
        )}
      </div>
      <ProjectFooter />
    </div>
  );
};

export default ChallengesPage;
