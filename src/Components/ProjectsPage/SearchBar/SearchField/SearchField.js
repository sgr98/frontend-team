import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './SearchField.css';
import SearchBarIcon from './SearchBarIcon.png';

export class SearchField extends Component {
  render() {
    return (
      //   <div className="searchBar-techmaniacs-SearchBar">
      //   <div className="searchBox-border-SearchField">
      <div>
        <InputGroup className="container-SearchField">
          <FormControl
            placeholder="Search "
            className="searchInput-SearchField"
          />
          <InputGroup.Append>
            <Button variant="outline-none" className="p-0">
              <img
                src={SearchBarIcon}
                alt="SearchBarIcon"
                className="searchBarIcon-SearchField"
              />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default SearchField;
