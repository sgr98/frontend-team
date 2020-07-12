import React from 'react';
import { ClubsTeamInfo } from './ClubsTeamInfo/ClubsTeamInfo';
import ContactForm from './ContactForm/ContactForm';
import CustomHR from '../ReusableComponents/CustomHR/CustomHR';
import ClubsNavbar from './ClubsNavbar/ClubsNavbar';

const ClubsPage = () => {
  return (
    <div>
      Clubs
      <ClubsNavbar />
      <ClubsTeamInfo />
      {/* <CustomHR /> */}
      <ContactForm />
    </div>
  );
};

export default ClubsPage;
