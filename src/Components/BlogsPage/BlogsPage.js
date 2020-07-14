import React from 'react';
import './BlogsPage.css';
import BlogsContainer from './BlogsContainer/BlogsContainer';
import Navigation from '../Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';
import BlogsNavbar from './BlogsNavbar/BlogsNavbar';
import Footer from '../Footer/Footer';

const BlogsPage = () => {
  return (
    <>
      <div className="BlogsPage">
        <Navigation />
        <BlogsNavbar />
        <SearchBar />
        <BlogsContainer />
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;
