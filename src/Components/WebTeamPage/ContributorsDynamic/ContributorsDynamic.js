import React from 'react';
import ContributorRanker from './ContributorRanker/ContributorRanker';
import './ContributorsDynamic.css';

export const ContributorsDynamic = () => {
    return (
      <div>
        <div className="ContributorDynamic-Container">
        <ContributorRanker target={"backend"} />
        <ContributorRanker target={"frontend"} />
        </div>
        <h5 style={{color: 'lightgray'}}>* If your name doesnt appear on the list please ensure your pull requests have been approved. Also ensure you have a public email id linked with your commits within github </h5>
      </div>
    );
  };
  
  export default ContributorsDynamic;