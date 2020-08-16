import React from 'react';
import './AwardDiv.css';

const AwardDiv = ({ winners, position }) => {
  let text = `🏆 Position ${position}:`;
  winners.forEach((name, index) => {
    if (index === winners.length - 1) text += ` ${name}`;
    else text += ` ${name},`;
  });

  return <div className="container-AwardDiv">{text}</div>;
};

export default AwardDiv;
