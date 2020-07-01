import React, { useState, useEffect } from 'react';
import './BlogsContainer.css';
import axios from 'axios';

import Card from '../../EventsPage/EventCard/card';
import BlogCardRecent from '../BlogCardRecent/BlogCardRecent';
import PaginationComponent from './Pagination/Pagination';

const BlogsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // next page button handler

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const data = {
    title: 'Techmanics Club - NSS Activity',
    topic: 'Teaching Robotics to School Children',
    description:
      'Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it?” Answer to each and every question is ROS(Robot Operating System)!',
    date: 'Tuesday, 2nd December 2021',
    location: 'TC1, Transit Campus ',
    time: '8:00 pm',
    buttonTitle: 'Register',
    buttonUrl: '#!',
    image:
      'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  };

  const blogsList = [];
  let recentBlog = null;
  if (currentPosts.length !== 0) {
    if (currentPage === 1) {
      for (let i = 0; i < currentPosts.length; i += 1) {
        const single = { ...data };
        single.title = currentPosts[i].title;
        blogsList.push(<Card key={i} single={single} />);
      }
      console.log(blogsList);
      const recentBlogData = { ...currentPosts[0] };
      recentBlogData.subHeading = 'Sameed';
      recentBlog = <BlogCardRecent key={0} data={recentBlogData} />;
    } else {
      for (let i = 0; i < currentPosts.length; i += 1) {
        const single = { ...data };
        single.title = currentPosts[i].title;
        blogsList.push(<Card key={i} single={single} />);
      }
    }
  }

  return (
    <div className="BlogsContainer">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {currentPage === 1 ? (
            <div className="Top-Row-BlogsContainer-desktop">
              <div className="column1-Top-Row-BlogsContainer">{recentBlog}</div>
              <div className="column2-Top-Row-BlogsContainer">
                {blogsList.slice(1, 3)}
              </div>
            </div>
          ) : null}
          <div>
            {currentPage === 1 ? (
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
      )}
    </div>
  );
};

export default BlogsContainer;
