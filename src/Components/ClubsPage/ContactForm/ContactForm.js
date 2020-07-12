import React, { Component } from 'react';
import './ContactForm.css';
import SendIcon from './sendIcon.png';
import ContactImage from './ContactFormImage.png';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  onChangeHandler = (event) => {
    switch (event.target.name) {
      case 'name': {
        this.setState({ name: event.target.value });
        break;
      }
      case 'email': {
        this.setState({ email: event.target.value });
        break;
      }
      case 'subject': {
        this.setState({ subject: event.target.value });
        break;
      }
      case 'message': {
        this.setState({ message: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="root-ContactForm">
        <div className="ContactImageDiv-ContactForm">
          <img
            src={ContactImage}
            alt="contact"
            className="ContactImage-ContactForm"
          />
        </div>

        <form
          className="form-ContactForm"
          onSubmit={(e) => {
            this.onSubmitHandler(e);
          }}
        >
          <h1 className="heading-ContactForm">Contact Us...</h1>
          <div className="inputGroup-ContactForm">
            <label htmlFor="name" className="label-ContactForm">
              NAME
            </label>
            <input
              type="text"
              name="name"
              className="input-ContactForm"
              placeholder="Enter your name here"
              onChange={(e) => this.onChangeHandler(e)}
            />
          </div>
          <div className="inputGroup-ContactForm">
            <label htmlFor="email" className="label-ContactForm">
              E-MAIL ID
            </label>
            <input
              type="text"
              name="email"
              className="input-ContactForm"
              placeholder="Enter your e-mail id"
              onChange={(e) => this.onChangeHandler(e)}
            />
          </div>
          <div className="inputGroup-ContactForm">
            <label htmlFor="subject" className="label-ContactForm">
              SUBJECT
            </label>
            <textarea
              type="text"
              name="subject"
              placeholder="Enter the subject of the message"
              className="input-ContactForm subject-ContactForm"
              onChange={(e) => this.onChangeHandler(e)}
            />
          </div>
          <div className="inputGroup-ContactForm">
            <label htmlFor="message" className="label-ContactForm ">
              MESSAGE
            </label>

            <textarea
              type="text"
              name="message"
              placeholder="Type your message for us"
              className="input-ContactForm message-ContactForm"
              onChange={(e) => this.onChangeHandler(e)}
            />
          </div>
          <div className="buttonDiv-ContactForm">
            <button type="submit" className="button-ContactForm">
              <img src={SendIcon} className="SendIcon-ContactForm" alt="send" />
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
