import React from 'react';
import SearchField from './SearchField/SearchField';
import { ProjectFields } from './ProjectFields/ProjectFields';

export const SearchBar = () => {
  return (
    <div>
      <SearchField />
      <ProjectFields />
    </div>
  );
};

export default SearchBar;