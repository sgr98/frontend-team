import React from 'react';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import WebTeamHeading from './WebTeamHeading/WebTeamHeading';
import ContributorsHeading from './ContributorsHeading/ContributorsHeading';
import { WebTeam } from './WebTeam/WebTeam';
import { Contributors } from './Contributors/Contributors';
import ContributorsDynamic from './ContributorsDynamic/ContributorsDynamic'

export const WebTeamPage = () => {
  return (
    <div>
      <Navigation />
      <WebTeamHeading />
      <WebTeam />
      <ContributorsHeading />
      <Contributors />
      <ContributorsDynamic />
      <ProjectFooter />
    </div>
  );
};

export default WebTeamPage;
