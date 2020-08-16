/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import * as uuid from 'uuid';
import './KeywordsList.css';

const KeywordsList = ({ data, searchKeyword }) => {
  return (
    <div className="container-keyword-KeywordsList">
      {data.map((keyword) => {
        return (
          <span key={uuid.v4()} className="p-0 m-0">
            <span
              className="keyword-KeywordsList"
              onClick={() => {
                searchKeyword(keyword);
              }}
            >
              #{keyword}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default KeywordsList;
