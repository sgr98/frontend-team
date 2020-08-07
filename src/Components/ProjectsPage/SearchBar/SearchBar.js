import React, { Component } from 'react';
import axios from 'axios';
import SubmitFormButton from '../../ReusableComponents/SubmitFormButton/SubmitFormButton';
import SearchField from './SearchField/SearchField';
import ProjectFields from './ProjectFields/ProjectFields';
import filterIcon from './filter.png';
import './SearchBar.css';
import Loading from '../../ReusableComponents/Loading/Loading';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClubs: [],
      selectedBranches: [],
      selectedDegrees: [],
      loading: true,
      clubNames: [],
      branchNames: [],
    };
  }

  componentDidMount() {
    let clubs = [];
    let branches = [];
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/clubs`)
      .then((res) => {
        clubs = res.data;
        axios
          .get(
            `${process.env.REACT_APP_BASE_URL}/front/categories/challenge?all=1`
          )
          .then((res2) => {
            branches = res2.data.filter((name) => {
              return (
                name.toLowerCase() !== 'coding' && name.toLowerCase() !== 'open'
              );
            });
            this.setState({
              clubNames: clubs,
              branchNames: branches,
              loading: false,
            });
          })
          .catch((err2) => console.log(err2));
      })
      .catch((err) => {
        console.log(err);
      });
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
    return this.state.loading ? (
      <></>
    ) : (
      <div className="searchbar-container-ProjectsPage">
        <div>
          <SearchField search={this.props.searchKeyword} />
          <ProjectFields
            category="BRANCH"
            updateArray={this.updateBranches}
            filterNames={this.state.branchNames}
          />
          <ProjectFields
            category="DEGREE"
            updateArray={this.updateDegrees}
            filterNames={['BTech', 'MTech']}
          />
          <ProjectFields
            category="CLUB"
            updateArray={this.updateClubs}
            filterNames={this.state.clubNames.map(({ name }) => name)}
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
