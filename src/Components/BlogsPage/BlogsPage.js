import React from 'react';
import EventsNavbar from '../EventsPage/EventsNavbar/EventsNavbar';
import BlogsContainer from './BlogsContainer/BlogsContainer';
import Navigation from '../Navigation/Navigation';

const BlogsPage = () => {
  return (
    <div>
      <Navigation />
      <EventsNavbar />
      <BlogsContainer />
    </div>
  );
};

export default BlogsPage;
