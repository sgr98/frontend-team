import React from 'react';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import WebTeamHeading from './WebTeamHeading/WebTeamHeading';
import Contributers from './Contributers/Contributers';
import { WebTeam } from './WebTeam/WebTeam';

export const WebTeamPage = () => {
  return (
    <div>
      <Navigation />
      <WebTeamHeading />
      <WebTeam />
      <Contributers />
      <ProjectFooter />
    </div>
  );
};

export default WebTeamPage;
