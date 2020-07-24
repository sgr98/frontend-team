import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './SearchField.css';
import SearchBarIcon from './SearchBarIcon.png';

export class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  submitOnEnterKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.props.search(this.state.value);
    }
  };

  render() {
    return (
      //   <div className="searchBar-techmaniacs-SearchBar">
      //   <div className="searchBox-border-SearchField">
      <div className="main-container-SearchField">
        <InputGroup className="container-SearchField">
          <FormControl
            onChange={this.onChangeHandler}
            placeholder="Search "
            className="searchInput-SearchField"
            onKeyDown={this.submitOnEnterKey}
          />
          <InputGroup.Append>
            <Button
              variant="outline-none"
              className="p-0"
              onClick={() => {
                this.props.search(this.state.value);
              }}
            >
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
