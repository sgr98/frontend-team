/* eslint-disable no-nested-ternary */
import React, { useState, useLayoutEffect } from 'react';
import { withRouter } from 'react-router';
import './BlogsContainer.css';
import Loading from '../../ReusableComponents/Loading/Loading';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import BlogCard from '../BlogCard/BlogCard';
import BlogCardRecent from '../BlogCardRecent/BlogCardRecent';
import PaginationComponent from '../../ReusableComponents/Pagination/Pagination';

const BlogsContainer = (props) => {
  const { clubName, url } = props;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts] = useState([]);
  const [blogsList, setBlogList] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [queryEndPoint, setQueryEndPoint] = useState('');

  // Search Button Handler

  const searchKeyword = (word) => {
    if (word !== '') {
      setQueryEndPoint(`?filter=${word.toLowerCase().replace(/\s+/g, '+')}`);
    } else setQueryEndPoint('');
  };

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 100);
  };

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 100);
  };

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 100);
  };

  useLayoutEffect(() => {
    // console.log('Query');
    axios
      .get(
        `${
          process.env.REACT_APP_BASE_URL
        }/front/blogs/${clubName
          .toLowerCase()
          .replace(/\s+/g, '%20')}${queryEndPoint}`
      )
      .then((res) => {
        setPosts(Object.keys(res.data).length !== 0 ? res.data : []);
        setLoading(false);
      });
  }, [clubName, queryEndPoint]);

  useLayoutEffect(() => {
    // console.log('currentPage, posts');
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [indexOfFirstPost, indexOfLastPost, currentPage, posts]);

  useLayoutEffect(() => {
    // console.log('blogsList');
    const blogsShown = [];
    let blogFeatured = null;

    if (currentPage === 1) {
      for (let i = 0; i < currentPosts.length; i += 1) {
        if (currentPosts[i]) {
          const single = { ...currentPosts[i] };
          if (currentPosts[i].featured) {
            blogsShown.unshift(<BlogCard key={i} single={single} />);
            // unshift adds to front
            const featuredBlogData = { ...currentPosts[i] };

            blogFeatured = <BlogCardRecent key={0} data={featuredBlogData} />;
          } else {
            blogsShown.push(<BlogCard key={i} single={single} />);
          }
        }
      }
    } else {
      for (let i = 0; i < currentPosts.length; i += 1) {
        if (currentPosts[i]) {
          const single = { ...currentPosts[i] };
          blogsShown.push(<BlogCard key={i} single={single} />);
        }
      }
    }

    setBlogList(blogsShown);

    if (blogFeatured) setFeaturedBlog(blogFeatured);
  }, [currentPage, currentPosts]);

  // console.log('blogs', blogsList, loading, posts);
  // console.log(props);
  return (
    <>
      <SearchBar
        url={url}
        currentSelected={clubName}
        searchKeyword={searchKeyword}
      />
      <div className="BlogsContainer">
        <Loading show={loading} />
        {loading ? (
          <></>
        ) : blogsList.length !== 0 ? (
          <>
            {currentPage === 1 && featuredBlog !== null ? (
              <div className="Top-Row-BlogsContainer-desktop">
                <div className="column1-Top-Row-BlogsContainer">
                  {featuredBlog}
                </div>
                <div className="column2-Top-Row-BlogsContainer">
                  {blogsList.slice(1, 3)}
                </div>
              </div>
            ) : null}
            <div>
              {currentPage === 1 && featuredBlog !== null ? (
                <>
                  <div className="Top-Row-BlogsContainer-mobile">
                    {blogsList.slice(0, 3)}
                  </div>
                  {blogsList.slice(3, blogsList.length)}
                </>
              ) : (
                blogsList
              )}
            </div>
            <PaginationComponent
              paginate={paginate}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              nextPageHandler={nextPageHandler}
              prevPageHandler={prevPageHandler}
            />
          </>
        ) : (
          <h1 className="notFound-BlogsPage">No Blogs Found</h1>
        )}
      </div>
    </>
  );
};

export default withRouter(BlogsContainer);
