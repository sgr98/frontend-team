import React from 'react';
import { ClubsTeamInfo } from './ClubsTeamInfo/ClubsTeamInfo';
import ContactForm from './ContactForm/ContactForm';
import CustomHR from '../ReusableComponents/CustomHR/CustomHR';
import ClubsHighlights from './ClubsHighlights/ClubsHighlights';
import ClubsNavbar from './ClubsNavbar/ClubsNavbar';

const ClubsPage = () => {
  return (
    <div>
      <ClubsNavbar />
      <ClubsHighlights />
      <ClubsTeamInfo />
      {/* <CustomHR /> */}
      <ContactForm />
    </div>
  );
};

export default ClubsPage;
