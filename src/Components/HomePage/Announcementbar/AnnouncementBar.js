import React, { Component } from 'react';
import './AnnouncementBar.css';

class AnnouncementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Announcements: [],
      currentIndex: 0,
      fading: true,
    };
  }

  componentDidMount() {
    this.setState({
      Announcements: this.props.announcements,
    });
    this.interval = setInterval(() => {
      this.increment();
    }, 7000);
  }

  shouldComponentUpdate(props, state) {
    return this.state.fading !== state;
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
    clearInterval(this.interval);
  }

  increment = () => {
    let current = this.state.currentIndex;

    current += 1;
    if (current >= this.state.Announcements.length) {
      current = 0;
    }
    this.setState({ fading: false });

    this.timeOut = setTimeout(() => {
      this.setState({ fading: true });
      this.setState({ currentIndex: current });
    }, 500);
  };

  render() {
    const currentAnnouncement = this.state.Announcements[
      this.state.currentIndex
    ];

    // let secondAnnouncement = 'Loading..';
    // if (this.state.Announcements.length !== 0) {
    //   let index = this.state.currentIndex;
    //   index++;
    //   if (index >= this.state.Announcements.length) {
    //     index = 0;
    //   }
    //   secondAnnouncement = this.state.Announcements[index].announcement;
    // }

    return (
      <div className="root-AnnouncementBar">
        <div className="current-AnnouncementBar">
          <p className={this.state.fading ? 'fade-in' : ''}>
            {currentAnnouncement ? currentAnnouncement.snippet : 'Loading..'}
          </p>
          {/* <a
            href={currentAnnouncement ? currentAnnouncement.link : ''}
            rel="noopener noreferrer"
            target="_blank"
          > */}
          {/* <button type="button" className="Button-AnnouncementBar">
              Check it out
            </button> */}
          {/* </a> */}
        </div>
        {/* <div className="secondary-AnnouncementBar">
          <p className={this.state.fading ? 'fade-in' : ''}>
            {secondAnnouncement}
          </p>
        </div> */}
        <div className="box1-AnnouncementBar" />
        <div className="box2-AnnouncementBar" />
        <div className="box3-AnnouncementBar" />
      </div>
    );
  }
}

export default AnnouncementBar;
