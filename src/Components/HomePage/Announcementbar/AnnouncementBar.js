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

  increment = () => {
    let current = this.state.currentIndex;

    current++;
    if (current >= this.state.Announcements.length) {
      current = 0;
    }
    this.setState({ fading: false });

    setTimeout(() => {
      this.setState({ fading: true });
      this.setState({ currentIndex: current });
    }, 500);
  };

  componentDidMount() {
    this.setState({
      Announcements: [
        {
          announcement: 'MindSprint 2020 Exam Results Published.',
          link: 'https://www.facebook.com/',
        },
        {
          announcement:
            'IIT Tirupati Hostels closed from today due to the ongoing Covid-19 pandemic.',
          link: 'https://www.youtube.com/',
        },
        {
          announcement: 'IIT Tirupati to be opened on 12th July?',
          link: 'https://www.google.com/',
        },
      ],
    });
    this.interval = setInterval(() => {
      this.increment();
    }, 7000);
  }

  shouldComponentUpdate(props, state) {
    return this.state.fading !== state;
  }

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
            {currentAnnouncement
              ? currentAnnouncement.announcement
              : 'Loading..'}
          </p>
          <a
            href={currentAnnouncement ? currentAnnouncement.link : ''}
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* <button type="button" className="Button-AnnouncementBar">
              Check it out
            </button> */}
          </a>
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
