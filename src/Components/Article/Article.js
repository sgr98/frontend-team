import React from 'react';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ArticleBody from './ArticleBody/ArticleBody';
import ArticleGallery from './ArticleGallery/ArticleGallery';

const Article = () => {
  return (
    <div>
      <Navigation />
      <ArticleBody />
      <ArticleGallery />
      <ProjectFooter />
    </div>
  );
};

export default Article;
