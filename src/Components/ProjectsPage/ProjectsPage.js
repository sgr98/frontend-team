import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';

const ProjectsPage = () => {
  return (
    <div>
      <Navigation />
      <ProjectCard />
      <ProjectFooter />
    </div>
  );
};

export default ProjectsPage;
