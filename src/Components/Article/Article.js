/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router';
import { Spinner } from 'react-bootstrap';
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
        <div className="spinner-c-overlay">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <div className="p-5 mx-auto">
                <Spinner
                  style={{ width: '5vmax', height: '5vmax' }}
                  className="loadingSpinner my-auto"
                  animation="border"
                  variant="primary"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
                <h1 style={{ fontWeight: 'bolder' }}>
                  Pumping awesomeness.. Please wait :)
                </h1>
              </div>
            </div>
          </div>
        </div>
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
