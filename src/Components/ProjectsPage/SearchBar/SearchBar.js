import React from 'react';
import SearchField from './SearchField/SearchField';
import ProjectFields from './ProjectFields/ProjectFields';
import './SearchBar.css';

export const SearchBar = () => {
  return (
    <div className="searchbar-container-ProjectsPage">
      <SearchField />
      <ProjectFields />
    </div>
  );
};

export default SearchBar;