/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './CalendarCarousel.css';
import Calendar from './Calendar/Calendar';

class CalendarCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      direction: null,
      settings: {
        controls: true,
        indicators: false,
        pause: false,
        interval: null,
      },
    };
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  };

  render() {
    return (
      <div className="root-CalendarCarousel">
        <Carousel
          {...this.state.settings}
          style={{ background: '#20201f' }}
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <Calendar
              monthOffset={-1}
              events={[
                {
                  date: 5,
                  image:
                    'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                  title: 'Robo Wars',
                },
                {
                  date: 20,
                  image:
                    'https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
                  title: 'Tirutsava',
                },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Calendar
              monthOffset={0}
              events={[
                {
                  date: 5,
                  image:
                    'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                  title: 'Robo Wars',
                },
                {
                  date: 20,
                  image:
                    'https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
                  title: 'Tirutsava',
                },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Calendar
              monthOffset={1}
              events={[
                {
                  date: 5,
                  image:
                    'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                  title: 'Robo Wars',
                },
                {
                  date: 20,
                  image:
                    'https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
                  title: 'Tirutsava',
                },
              ]}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CalendarCarousel;
