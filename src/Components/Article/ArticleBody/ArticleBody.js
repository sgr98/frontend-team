import React, { useState } from 'react';
import parse from 'html-react-parser';
import ArticleHeader from './ArticleHeader/ArticleHeader';

import './ArticleBody.css';
import ReferencesButton from './ReferencesButton/ReferencesButton';
import AttachmentIcon from './attachmentIcon.png';

const ArticleBody = ({ data }) => {
  const attachmentClickHandler = (fileName) => {
    window.open(
      `${process.env.REACT_APP_BASE_URL}/files/${fileName}`,
      '_blank'
    );
  };
  return (
    <div>
      <ArticleHeader
        title={data.title}
        teamMembers={data.team_members}
        author={data.author}
      />
      <div className="articleContent-ArticleBody">{parse(data.summary)}</div>
      <div className="ButtonGroup-ArticleBody">
        {data.outside_links.length !== 0 ? (
          <ReferencesButton links={data.outside_links} />
        ) : null}

        {data.file_attachment.map((fileName) => (
          <button
            type="button"
            className="attachment-ArticleBody"
            key={fileName}
            onClick={() => {
              attachmentClickHandler(fileName);
            }}
          >
            <img
              className="attachmentIcon-ArticleBody"
              src={AttachmentIcon}
              alt="Attachment Icon"
            />
            {`ATTACHMENT.${fileName.split('.')[1]}`}
          </button>
        ))}
      </div>
      <div className="keywordsGroup-ArticleBody">
        {data.keywords.map((keyword) => {
          return (
            <div className="keywordDiv-ArticleBody" key={keyword}>
              {' '}
              <a href="" className="keyword-ArticleBody">{`#${keyword}`}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleBody;
