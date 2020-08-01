/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ArticleBody from './ArticleBody/ArticleBody';
import ArticleGallery from './ArticleGallery/ArticleGallery';

const Article = (props) => {
  const [article, setArticle] = useState(null);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  let isRendered = useRef(false);

  useEffect(() => {
    isRendered = true;

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/${props.category}/${props.match.params.id}`
      )
      .then((res) => {
        console.log(res);
        if (isRendered) {
          setArticle(res.data);
        }
        return null;
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/clubs`)
      .then((res) => {
        console.log(res);
        if (isRendered) {
          setClubs(res.data);
        }
        return null;
      })
      .catch((err) => console.log(err));

    return () => {
      isRendered = false;
    };
  }, [props.match.params.id]);

  useEffect(() => {
    setLoading(false);
  }, [article]);

  return (
    <>
      {article === null ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {props.category === 'project' ? <Navigation /> : null}
          <ArticleBody data={article} category={props.category} clubs={clubs} />

          {/* The below ternary condition has been added because projects and blogs has slightly different data */}
          {props.category === 'blog' ? (
            article.video_links.length !== 0 || article.gallery.length !== 0 ? (
              <ArticleGallery data={article} category={props.category} />
            ) : null
          ) : article.snapshot_url.length !== 0 ? (
            <ArticleGallery data={article} category={props.category} />
          ) : null}

          {props.category === 'project' ? <ProjectFooter /> : null}
        </div>
      )}
    </>
  );
};

export default withRouter(Article);
