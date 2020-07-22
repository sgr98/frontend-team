import React from 'react';
import SearchField from './SearchField/SearchField';
import ProjectFields from './ProjectFields/ProjectFields';
import './SearchBar.css';

export const SearchBar = () => {
  return (
    <div className="searchbar-container-ProjectsPage">
      <SearchField />
      <ProjectFields
        category="BRANCH"
        filterNames={[
          'Mechanical',
          'Computer Science',
          'Chemical',
          'Civil',
          'Electrical',
        ]}
      />
      <ProjectFields
        category="COURSE"
        filterNames={['Machine Learning', 'Digital Processing']}
      />
      <ProjectFields
        category="CLUB"
        filterNames={['TechManiacs', 'Digital Wizards']}
      />
    </div>
  );
};

export default SearchBar;
