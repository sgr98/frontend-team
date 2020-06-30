import React, { useState } from 'react';
import './Pagination.css';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPageHandler,
  prevPageHandler,
}) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          prevPageHandler();
          setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage === 1}
      />
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
      <Pagination.Next
        onClick={() => {
          nextPageHandler();
          setCurrentPage(currentPage + 1);
        }}
        disabled={currentPage === pageNumbers.length}
      />
    </Pagination>
  );
};

export default PaginationComponent;
