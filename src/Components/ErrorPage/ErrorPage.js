import React from 'react';
import './ErrorPage.css';
import Navigation from '../Navigation/Navigation';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <div className="container-ErrorPage">
        <h1>404</h1>
        <h1>PAGE NOT FOUND :(</h1>
      </div>
      <ProjectFooter />
    </div>
  );
};

export default ErrorPage;
