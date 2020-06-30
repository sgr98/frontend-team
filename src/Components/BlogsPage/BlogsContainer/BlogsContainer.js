import React from 'react';
import './BlogsContainer.css';
import { Pagination } from 'react-bootstrap';
import Card from '../../EventsPage/EventCard/card';
import BlogCardRecent from '../BlogCardRecent/BlogCardRecent';

const BlogsContainer = () => {
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
  return (
    <div className="BlogsContainer">
      <div className="Top-Row-BlogsContainer">
        <div className="column1-Top-Row-BlogsContainer">
          <BlogCardRecent single={data} />
        </div>
        <div className="column2-Top-Row-BlogsContainer">
          <Card single={data} />
          <Card single={data} />
        </div>
      </div>
      <div>
        <Card single={data} />
        <Card single={data} />
        <Card single={data} />
        <Card single={data} />
        <Card single={data} />
        <Card single={data} />
      </div>

      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>

        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default BlogsContainer;
