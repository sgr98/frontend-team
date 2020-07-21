import React from 'react';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ArticleBody from './ArticleBody/ArticleBody';

const Article = () => {
  return (
    <div>
      <Navigation />
      <ArticleBody />
      <ProjectFooter />
    </div>
  );
};

export default Article;
