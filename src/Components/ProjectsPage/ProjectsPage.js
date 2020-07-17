import React from 'react';
import './ProjectsPage.css';
import ProjectsContainer from './ProjectCard/ProjectsContainer';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import SearchBar from "./SearchBar/SearchBar"

const ProjectsPage = () => {
  return (
    <div className="root-ProjectsPage">
      <Navigation />
      <SearchBar />
      <ProjectsContainer />
      <ProjectFooter />
    </div>
  );
};

export default ProjectsPage;
