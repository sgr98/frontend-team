import React from 'react';
import Button from 'react-bootstrap/Button';
import './SubmitFormButton.css';

const SubmitFormButton = (props) => {
  const onClickHandler = () => {
    window.open(
      `${process.env.REACT_APP_BASE_URL}/${props.redirectionLink}`,
      '_blank'
    );
  };

  return (
    <div className="main-container-SubmitFormButton" onClick={onClickHandler}>
      <div className="container-SubmitFormButton">
        <button type="button" className="button-SubmitFormButton">
          <div className="title-SubmitFormButton">
            <div>{props.title}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubmitFormButton;
