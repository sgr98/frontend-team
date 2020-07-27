import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ArticleBody from './ArticleBody/ArticleBody';
import ArticleGallery from './ArticleGallery/ArticleGallery';

const Article = (props) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  let isRendered = useRef(false);

  useEffect(() => {
    isRendered = true;
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/${props.category}/${props.match.params.id}`
      )
      .then((res) => {
        if (isRendered) {
          setArticle(res.data);
        }
        return null;
      })
      .catch((err) => console.log(err));

    return () => {
      isRendered = false;
    };
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [article]);

  return (
    <>
      {article === null ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {/* <Navigation /> */}
          <ArticleBody data={article} />
          {article.video_links.length !== 0 || article.gallery.length !== 0 ? (
            <ArticleGallery data={article} />
          ) : null}

          {/* <ProjectFooter /> */}
        </div>
      )}
    </>
  );
};

export default withRouter(Article);
