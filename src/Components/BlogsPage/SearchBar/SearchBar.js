import React, { Component } from "react";
import {InputGroup,FormControl,Button} from "react-bootstrap";
import "./SearchBar.css";
export class SearchBar extends Component {
  render() {
    return (
      <div className="container-SearchBar">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Blog Posts"
            aria-label="Search Blog Posts"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary"><Image src="./SearchBarIcon.png" rounded />Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
