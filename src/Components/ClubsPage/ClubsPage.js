import React from 'react';
import { ClubsTeamInfo } from './ClubsTeamInfo/ClubsTeamInfo';
import ContactForm from './ContactForm/ContactForm';
import CustomHR from '../ReusableComponents/CustomHR/CustomHR';
import ClubsHighlights from './ClubsHighlights/ClubsHighlights';
import ClubsNavbar from './ClubsNavbar/ClubsNavbar';
import ClubsFooter from './ClubsFooter/ClubsFooter';
import ClubsFeautured from './ClubsFeatured/ClubsFeatured';
const ClubsPage = () => {
  return (
    <div>
      <ClubsNavbar />
      <ClubsFeautured />
      <ClubsHighlights />
      <ClubsTeamInfo />
      <CustomHR />
      <ContactForm />
      <ClubsFooter />
    </div>
  );
};

export default ClubsPage;
