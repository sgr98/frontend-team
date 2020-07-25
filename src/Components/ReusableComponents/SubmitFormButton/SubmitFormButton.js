import React from 'react';
import Button from 'react-bootstrap/Button'
import './SubmitFormButton.css';

const SubmitFormButton = (props) => {

    return(
        <div className="main-container-SubmitFormButton">
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