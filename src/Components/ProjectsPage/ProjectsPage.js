/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './ProjectsPage.css';
import ProjectsContainer from './ProjectsContainer/ProjectsContainer';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${process.env.REACT_APP_BASE_URL}/front/projects`,
      currentUrl: `${process.env.REACT_APP_BASE_URL}/front/projects`,
      selectedClubs: [],
      selectedBranches: [],
      selectedDegrees: [],
      keywordSearched: '',
    };
  }

  constructUrl = (
    keyword,
    selectedBranches,
    selectedClubs,
    selectedDegrees
  ) => {
    let { url } = this.state;

    if (selectedBranches.length !== 0) {
      url += '?branch=';
      selectedBranches.forEach((branch, index) => {
        const str = branch.toLowerCase().replace(/\s+/g, '+');
        url += str;
        if (index !== selectedBranches.length - 1) url += ',';
      });
    }
    if (selectedClubs.length !== 0) {
      if (selectedBranches.length !== 0) url += '&club=';
      else url += '?club=';
      selectedClubs.forEach((club, index) => {
        const str = club.toLowerCase().replace(/\s+/g, '+');
        url += str;
        if (index !== selectedClubs.length - 1) url += ',';
      });
    }
    if (selectedDegrees.length !== 0) {
      if (selectedBranches.length !== 0 || selectedClubs.length !== 0) {
        url += '&degree=';
      } else {
        url += '?degree=';
      }

      selectedDegrees.forEach((degree, index) => {
        const str = degree.toLowerCase().replace(/\s+/g, '+');
        url += str;
        if (index !== selectedDegrees.length - 1) url += ',';
      });
    }
    if (keyword !== '') {
      if (
        selectedBranches.length !== 0 ||
        selectedClubs.length !== 0 ||
        selectedDegrees.length !== 0
      ) {
        url += `&query_string=${keyword.toLowerCase().replace(/\s+/g, '+')}`;
      } else {
        url += `?query_string=${keyword.toLowerCase().replace(/\s+/g, '+')}`;
      }
    }
    return url;
  };

  searchKeyword = (keyword) => {
    const url = this.constructUrl(
      keyword,
      this.state.selectedBranches,
      this.state.selectedClubs,
      this.state.selectedDegrees
    );
    this.setState({ currentUrl: url, keywordSearched: keyword });
  };

  applyFilter = (selectedBranches, selectedClubs, selectedDegrees) => {
    const url = this.constructUrl(
      '',
      selectedBranches,
      selectedClubs,
      selectedDegrees
    );
    this.setState({
      currentUrl: url,
      selectedBranches,
      selectedClubs,
      selectedDegrees,
    });
  };

  render() {
    return (
      <div className="root-ProjectsPage">
        <Navigation />
        <SearchBar
          searchKeyword={this.searchKeyword}
          applyFilter={this.applyFilter}
        />
        {this.state.keywordSearched !== '' ? (
          <p className="SearchResults-ProjectsPage">
            {`Search Results for "${this.state.keywordSearched}"`}
          </p>
        ) : null}
        <ProjectsContainer
          url={this.state.currentUrl}
          searchKeyword={this.searchKeyword}
        />
        <ProjectFooter />
      </div>
    );
  }
}

export default ProjectsPage;
