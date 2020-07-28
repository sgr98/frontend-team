import React from 'react';
import './ArticleHeader.css';

const ArticleHeader = (props) => {
  return (
    <div className="container-ArticleHeader">
      <h1 className="topic-ArticleHeader">{props.title}</h1>
      <div className="underline-ArticleHeader" />
      {props.teamMembers ? (
        <p className="teamMembers-ArticleHeader">
          Team Members: {props.teamMembers.join(', ')}
        </p>
      ) : null}
      {props.author ? (
        <p className="teamMembers-ArticleHeader">Author: {props.author}</p>
      ) : null}
      {props.chiefGuest !== 'NULL' ? (
        <p className="teamMembers-ArticleHeader">
          Chief Guest: {props.chiefGuest}
        </p>
      ) : null}
    </div>
  );
};

export default ArticleHeader;
