import React, { useState } from 'react';
import './DropdownItem.css';
import checkedBox from './checkedBox.png';
import uncheckedBox from './uncheckedBox.png';

const SubDropdownMenuItemProjectsPage = (props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (selected) {
      props.removeFilter();
      setSelected(false);
    } else {
      props.addFilter();
      setSelected(true);
    }
  };
  return (
    <div className="sub-dropdown-button-ProjectsPage">
      <button
        type="button"
        id="checkbox-control-button-ProjectsPage"
        onClick={handleClick}
      >
        <div className="dropdown-sub-box-ProjectsPage">
          <div>
            <img
              id="checkbox-dropdown-ProjectsPage"
              src={selected ? checkedBox : uncheckedBox}
              alt="Check Box"
            />
            <span className="categoryName-ProjectsPage">{props.text}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SubDropdownMenuItemProjectsPage;

// src={checkedBox}
