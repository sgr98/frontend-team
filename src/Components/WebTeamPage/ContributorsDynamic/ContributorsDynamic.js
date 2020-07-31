import React from 'react';
import ContributorRanker from './ContributorRanker/ContributorRanker';
import './ContributorsDynamic.css';

export const ContributorsDynamic = () => {
    return (
      <div>
        <ContributorRanker target={"backend"} />
      </div>
    );
  };
  
  export default ContributorsDynamic;