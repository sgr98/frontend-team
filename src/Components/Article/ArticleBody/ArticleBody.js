import React from 'react';
import ArticleHeader from './ArticleHeader/ArticleHeader';
import './ArticleBody.css';
import ReferencesButton from './ReferencesButton/ReferencesButton';
import AttachmentIcon from './attachmentIcon.png';

const ArticleBody = (props) => {
  return (
    <div>
      <ArticleHeader />
      <div className="articleContent-ArticleBody">
        Entrepreneurship Cell IIT Madras makes the entrepreneurial world
        accessible to all group of people part of the IIT Madras ecosystem,
        cater the audience from startup enthusiast to hardcore entrepreneurs,
        with plethora of yearlong events like Conclaves, Keynotes,
        Industry-defined Problems, B-Planning. Entrepreneurship Cell IIT Madras
        makes the entrepreneurial world accessible to all group of people part
        of the IIT Madras ecosystem, cater the audience from startup enthusiast
        to hardcore entrepreneurs. Industry-defined Problems, B-Planning.
        Entrepreneurship Cell IIT Madras makes the entrepreneurial world
        accessible to all. “But what if we end up in a Terminator scenario?” One
        cannot be blamed for asking such questions since, through movies and
        sci-fi stories, cases where the robots take over are almost ubiquitous
        and therefore frame our impression of a future with Artificial
        Intelligence (AI). However, since human beings are able to live and
        cooperate through laws, why not apply laws for AI as well? Enter
        Asimov’s Laws of Robotics! As always, to have a better understanding of
        the future, let uused in a range of sectors, such as the aerospace and
        mining industries, where the process is powerful for the purposes of
        carving and cutting, among other functions. Water jet cutters are also
        used for applications that require very intricate cuts in material, as
        the lack of heat prevents any change in the materials intrinsic
        properties that may result from metal on metal cutting. “But what if we
        end up in a Terminator scenario?” One cannot be blamed for asking such
        questions since, through movies and sci-fi stories, cases where the
        robots take over are almost ubiquitous and therefore frame our
        impression of a future with Artificial Intelligence (AI). However, since
        human beings are able to live and cooperate through laws, why not apply
        laws for AI as well? Enter Asimov’s Laws of Robotics! As always, to have
        a better understanding of the future, let us take a dive into the past.
        When Asimov proposed those laws, he unknowingly based them on another
        assumption: that we, humans, knew exactly where the ethical lines were
        to be drawn. But do we? Law 1: A robot may not injure a human being or,
        through inaction, allow a human being to come to harm. Law 2: A robot
        must obey orders given to it by human beings except where such orders
        would conflict with the first law. Law 3: A robot must protect its own
        existence as long as such protection does not conflict with the first or
        second laws.
      </div>
      <div className="ButtonGroup-ArticleBody">
        <ReferencesButton />
        <button type="button" className="attachment-ArticleBody">
          <img
            className="attachmentIcon-ArticleBody"
            src={AttachmentIcon}
            alt="Attachment Icon"
          />
          Attachment.fla
        </button>
        <button type="button" className="attachment-ArticleBody">
          <img
            className="attachmentIcon-ArticleBody"
            src={AttachmentIcon}
            alt="Attachment Icon"
          />
          Attachment.fla
        </button>
        <button type="button" className="attachment-ArticleBody">
          <img
            className="attachmentIcon-ArticleBody"
            src={AttachmentIcon}
            alt="Attachment Icon"
          />
          Attachment.fla
        </button>
        <button type="button" className="attachment-ArticleBody">
          <img
            className="attachmentIcon-ArticleBody"
            src={AttachmentIcon}
            alt="Attachment Icon"
          />
          Attachment.fla
        </button>
        <button type="button" className="attachment-ArticleBody">
          <img
            className="attachmentIcon-ArticleBody"
            src={AttachmentIcon}
            alt="Attachment Icon"
          />
          Attachment.fla
        </button>
      </div>
    </div>
  );
};

export default ArticleBody;
