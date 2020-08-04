import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <Spinner
      className="loadingSpinner"
      animation="border"
      variant="primary"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;
