import React from 'react';
import './ProjectsPage.css';
import ProjectsContainer from './ProjectCard/ProjectsContainer';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';

const ProjectsPage = () => {
  return (
    <div className="root-ProjectsPage">
      <Navigation />
      <ProjectsContainer />
      <ProjectFooter />
    </div>
  );
};

export default ProjectsPage;
