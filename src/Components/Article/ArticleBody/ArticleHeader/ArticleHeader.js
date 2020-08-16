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
          <figure class="figure p-4" style={{margin:"0px"}}>
          <img src={`${process.env.REACT_APP_BASE_URL}/images/${props.chiefImg}`} style={{maxHeight:"150px"}} alt="Chief Guest" class="img-thumbnail"/>
          {console.log(props)}
          <figcaption class="p-2"><b>Chief Guest:</b> {props.chiefGuest}</figcaption>
          </figure>
        </p>
      ) : null}
    </div>
  );
};

export default ArticleHeader;
