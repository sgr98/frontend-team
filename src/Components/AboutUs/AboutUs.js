import React from 'react';
import { TechnicalTeam } from './TechnicalTeam/TechnicalTeam';
import TACHeading from './HighlightsHeading/TACHeading';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navigation />
      <TACHeading />
      <TechnicalTeam />
      <Footer />
    </div>
  );
};

export default AboutUs;
