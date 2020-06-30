import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <Pagination.Prev />
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          onClick={() => {
            paginate(number);
            setCurrentPage(number);
          }}
          active={currentPage === number}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationComponent;
