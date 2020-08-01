import React from 'react';
import KeywordModal from './KeywordModal/KeywordModal';
import parse from 'html-react-parser';
import ArticleHeader from './ArticleHeader/ArticleHeader';

import './ArticleBody.css';
import ReferencesButton from './ReferencesButton/ReferencesButton';
import AttachmentIcon from './attachmentIcon.png';

const ArticleBody = ({ data, category, clubs }) => {
  const attachmentClickHandler = (fileName) => {
    window.open(
      `${process.env.REACT_APP_BASE_URL}/files/${fileName}`,
      '_blank'
    );
  };

  let buttonGroup = null;
  console.log(category);
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
              <KeywordModal
                keyword={keyword}
                category={category}
                clubs={clubs}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleBody;
