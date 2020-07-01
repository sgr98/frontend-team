
import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';
import SearchBarIcon from './SearchBarIcon.png';

export class SearchBar extends Component {
  render() {
    return (
      <div className="searchBox-border-SearchBar">
        <InputGroup className="container-SearchBar">
          <FormControl
            placeholder="Search blog posts"
            className="searchInput-SearchBar"
          />
          <InputGroup.Append>
            <Button variant="outline-none">
              <img
                src={SearchBarIcon}
                alt="SearchBarIcon"
                className="searchBarIcon-SearchBar"
              />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
