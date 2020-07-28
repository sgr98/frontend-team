import React from 'react';
import parse from 'html-react-parser';
import ArticleHeader from './ArticleHeader/ArticleHeader';

import './ArticleBody.css';
import ReferencesButton from './ReferencesButton/ReferencesButton';
import AttachmentIcon from './attachmentIcon.png';

const ArticleBody = ({ data, category }) => {
  const attachmentClickHandler = (fileName) => {
    window.open(
      `${process.env.REACT_APP_BASE_URL}/files/${fileName}`,
      '_blank'
    );
  };

  let buttonGroup = null;

  if (category === 'blog') {
    buttonGroup = (
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
    );
  }
  return (
    <div>
      <ArticleHeader
        title={data.title}
        teamMembers={data.team_members}
        author={data.creator}
        chiefGuest={data.chief_guest || 'NULL'}
      />
      <div className="articleContent-ArticleBody">
        {data.summary ? parse(data.summary) : parse(data.description)}
      </div>
      {buttonGroup}

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
