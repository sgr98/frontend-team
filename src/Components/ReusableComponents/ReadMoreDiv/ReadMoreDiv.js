/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import './ReadMoreDiv.css';

const ReadMoreDiv = (props) => {
  const [hidden, setHidden] = useState(true);

  const toggleHandler = () => {
    setHidden(!hidden);
  };

  const HiddenStyle = {
    maxHeight: `${props.maxHeight}px`,
    overflow: 'hidden',
  };

  const ReadMoreStyle = {
    maxHeight: `${props.maxHeight + 10}px`,
    overflow: 'scroll',
    // marginBottom: '15px',
  };

  return (
    <div
      className="container-ReadMoreDiv"
      style={!hidden ? ReadMoreStyle : null}
    >
      <div className="content-ReadMoreDiv" style={hidden ? HiddenStyle : null}>
        {props.children}
      </div>
      <span className="toggle-ReadMoreDiv" onClick={toggleHandler}>
        {hidden ? 'Show More' : 'Hide'}
      </span>
    </div>
  );
};

export default ReadMoreDiv;
