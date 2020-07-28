/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';
import SearchBarIcon from './SearchBarIcon.png';
import TechManiacsDropDown from './TechManiacsDropDown';
import WriteNewBlogButton from './WriteNewBlog/WriteNewBlog';

const SearchBar = ({ url, searchKeyword, currentSelected }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitOnEnterKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      searchKeyword(value);
    }
  };
  return (
    <div className="searchBar-techmaniacs-SearchBar">
      <div className="searchBox-border-SearchBar">
        <InputGroup
          className="container-SearchBar"
          onChange={onChangeHandler}
          onKeyDown={submitOnEnterKey}
        >
          <FormControl
            placeholder="Search blog posts"
            className="searchInput-SearchBar"
          />
          <InputGroup.Append>
            <Button
              variant="outline-none"
              onClick={() => {
                searchKeyword(value);
              }}
            >
              <img
                src={SearchBarIcon}
                alt="SearchBarIcon"
                className="searchBarIcon-SearchBar"
              />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <TechManiacsDropDown url={url} currentSelected={currentSelected} />
      <WriteNewBlogButton />     
    </div>
  );
};

export default SearchBar;
