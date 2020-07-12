import React from 'react';
import { ClubsTeamInfo } from './ClubsTeamInfo/ClubsTeamInfo';
import ContactForm from './ContactForm/ContactForm';
import CustomHR from '../ReusableComponents/CustomHR/CustomHR';

const ClubsPage = () => {
  return (
    <div>
      Clubs
      <ClubsTeamInfo />
      {/* <CustomHR /> */}
      <ContactForm />
    </div>
  );
};

export default ClubsPage;
