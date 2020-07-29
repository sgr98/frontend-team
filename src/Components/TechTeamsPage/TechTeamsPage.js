import React from 'react';
import Navigation from '../Navigation/Navigation';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import TechTeamContainer from './TechTeamContainer/TechTeamContainer';
import TechTeamMembers from './TechTeamContainer/TechTeamMembers/TechTeamMembers';

const TechTeamsPage = () => {
  return (
    <div>
      <Navigation />
      <TechTeamContainer />
      <TechTeamMembers />
      <ProjectFooter />
    </div>
  );
};

export default TechTeamsPage;
