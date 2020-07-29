import React from 'react';
import { TechnicalTeam } from './TechnicalTeam/TechnicalTeam';
import TACHeading from './HighlightsHeading/TACHeading';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';

const AboutUs = () => {
  return (
    <div>
      <Navigation />
      <TACHeading />
      <TechnicalTeam />
      <ProjectFooter />
    </div>
  );
};

export default AboutUs;
