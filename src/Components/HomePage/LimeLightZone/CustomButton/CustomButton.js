import React from 'react';
import './CustomButton.css';

const CustomButton = (props) => {
  return (
    <div className="border-div-button" onClick={props.onClickHandler}>
      <div className="Button-Custom">{props.text}</div>
    </div>
  );
};

export default CustomButton;
