import React from 'react';
import KeywordModal from './KeywordModal/KeywordModal';
import parse from 'html-react-parser';
import ArticleHeader from './ArticleHeader/ArticleHeader';

import './ArticleBody.css';
import ReferencesButton from './ReferencesButton/ReferencesButton';
import AttachmentIcon from './attachmentIcon.png';
import AwardDiv from './AwardDiv/AwardDiv';

const ArticleBody = ({ data, category, clubs }) => {
  const attachmentClickHandler = (fileName) => {
    window.open(
      `${process.env.REACT_APP_BASE_URL}/files/${fileName}`,
      '_blank'
    );
  };

  const awardString = data.award_winners;
  let awardWinners = [];
  if (awardString.length !== 0) {
    awardWinners = awardString.split('|').map((str) => str.split(','));
  }
  console.log(awardWinners);

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
      {awardWinners.map((arr, index) => (
        <AwardDiv winners={arr} key={arr[0]} position={index + 1} />
      ))}

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
