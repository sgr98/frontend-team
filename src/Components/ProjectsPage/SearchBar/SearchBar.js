import React, { Component } from 'react';
import SubmitFormButton from '../../ReusableComponents/SubmitFormButton/SubmitFormButton';
import SearchField from './SearchField/SearchField';
import ProjectFields from './ProjectFields/ProjectFields';
import filterIcon from './filter.png';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClubs: [],
      selectedBranches: [],
      selectedDegrees: [],
    };
  }

  updateClubs = (clubs) => {
    this.setState({ selectedClubs: clubs });
  };

  updateBranches = (Branches) => {
    this.setState({ selectedBranches: Branches });
  };

  updateDegrees = (Degrees) => {
    this.setState({ selectedDegrees: Degrees });
  };

  render() {
    return (
      <div className="searchbar-container-ProjectsPage">
        <div>
          <SearchField search={this.props.searchKeyword} />
          <ProjectFields
            category="BRANCH"
            updateArray={this.updateBranches}
            filterNames={[
              'Mechanical',
              'Computer Science',
              'Chemical',
              'Civil',
              'Electrical',
            ]}
          />
          <ProjectFields
            category="DEGREE"
            updateArray={this.updateDegrees}
            filterNames={['BTech', 'MTech']}
          />
          <ProjectFields
            category="CLUB"
            updateArray={this.updateClubs}
            filterNames={['TechManiacs', 'Digital Wizards']}
          />
        </div>
        {/* The Styling for the below button is similar to the above buttons */}
        <div>
          <div className="applyFilter-container">
            <div className="dropdown">
              <div className="applyFilterDiv-SearchBar">
                <button
                  type="button"
                  onClick={() => {
                    this.props.applyFilter(
                      this.state.selectedBranches,
                      this.state.selectedClubs,
                      this.state.selectedDegrees
                    );
                  }}
                >
                  <div className="applyFilterText-SearchBar">
                    <div>
                      Apply{' '}
                      <img
                        src={filterIcon}
                        className="filterIcon-SearchBar"
                        alt="filter"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="applyFilter-container">
            <div className="dropdown">
              <div className="applyFilterDiv-SearchBar">
                <button
                  type="button"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <div className="applyFilterText-SearchBar">
                    <div>Clear </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <SubmitFormButton
            title="Submit Your Project"
            redirectionLink="projects/auth/google"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
