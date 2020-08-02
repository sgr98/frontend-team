import React from 'react';
import './Remark.css';

const Remark = (props) => (
  <div className="remark" onClick={props.onClickHandler}>
    <span>{props.text}</span>
  </div>
);

export default Remark;
