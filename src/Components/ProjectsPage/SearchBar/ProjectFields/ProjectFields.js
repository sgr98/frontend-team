/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './ProjectFields.css';

import SubDropdownMenuItemProjectsPage from './SubDropdownItem';

const ProjectFields = (props) => {
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu

  const [selectedFilters, setSelectedFilters] = useState(props.filterNames);

  const addFilter = (filterName) => {
    const filters = [...selectedFilters];
    filters.push(filterName);
    setSelectedFilters(filters);
  };

  const removeFilter = (filterName) => {
    const filters = selectedFilters.filter((filterString) => {
      return filterString !== filterName;
    });
    setSelectedFilters(filters);
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="main-dropdown-button-ProjectsPage"
    >
      <button type="button">
        <div className="dropdown-title-box-ProjectsPage">
          <div>{`${props.category} (${selectedFilters.length})`}</div>
        </div>
      </button>
    </div>
  ));

  return (
    <div className="project-fields-container">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

        <Dropdown.Menu>
          {props.filterNames.map((name, index) => {
            return (
              <Dropdown.Item
                as={SubDropdownMenuItemProjectsPage}
                eventKey={index + 1}
                text={name}
                addFilter={() => {
                  addFilter(name);
                }}
                removeFilter={() => {
                  removeFilter(name);
                }}
              />
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ProjectFields;
