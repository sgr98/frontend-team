import React from 'react';
import './BlogsPage.css';
import BlogsContainer from './BlogsContainer/BlogsContainer';
import Navigation from '../Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';
import BlogsNavbar from './BlogsNavbar/BlogsNavbar';

const BlogsPage = () => {
  return (
    <div className="BlogsPage">
      <Navigation />
      <BlogsNavbar />
      <SearchBar />
      <BlogsContainer />
    </div>
  );
};

export default BlogsPage;
