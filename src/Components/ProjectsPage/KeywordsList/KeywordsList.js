import React, { useState } from 'react';
import * as uuid from 'uuid';
import './KeywordsList.css';

export const KeywordsList = () => {
  const [keywords, setKeywords] = useState([
    'AI',
    'Robotics',
    'Arduino',
    '3D',
    'Design',
    'CNC',
    'AI',
    'Robotics',
    'Arduino',
    '3D',
    'Design',
    'CNC',
    'AI',
    'Robotics',
    'Arduino',
    '3D',
    'Design',
    'CNC',
  ]);
  return (
    <div className="container-keyword-KeywordsList">
      {keywords.map((keyword) => {
        return (
          <span key={uuid.v4()} className="p-0 m-0">
            <a className="keyword-KeywordsList" href="#">
              #{keyword}
            </a>{' '}
          </span>
        );
      })}
    </div>
  );
};
