import React from 'react';

import BlogsContainer from './BlogsContainer/BlogsContainer';
import Navigation from '../Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';
import BlogsNavbar from './BlogsNavbar/BlogsNavbar';

const BlogsPage = () => {
  return (
    <div>
      <Navigation />
      <BlogsNavbar />
      <SearchBar />
      <BlogsContainer />
    </div>
  );
};

export default BlogsPage;
