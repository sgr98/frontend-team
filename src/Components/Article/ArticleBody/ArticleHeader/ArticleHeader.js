import React from 'react';
import './ArticleHeader.css';

const ArticleHeader = (props) => {
  return (
    <div className="container-ArticleHeader">
      <h1 className="topic-ArticleHeader"> DIY IDEX CNC MACHINE</h1>
      <div className="underline-ArticleHeader" />
      <p className="teamMembers-ArticleHeader">
        Team Members: Sathya Shyam Kasi, Vivek Mokukuru, Samhitha Sai, Hatens S
        Varnaid, Saleeq K Mohammed, Vijay Thokku
      </p>
    </div>
  );
};

export default ArticleHeader;
