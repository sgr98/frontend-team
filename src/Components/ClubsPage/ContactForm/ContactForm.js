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

        <form className="form-ContactForm">
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
            />
          </div>
          <div className="inputGroup-ContactForm">
            <label htmlFor="name" className="label-ContactForm">
              SUBJECT
            </label>
            <textarea
              type="text"
              name="name"
              placeholder="Enter the subject of the message"
              className="input-ContactForm subject-ContactForm"
            />
          </div>
          <div className="inputGroup-ContactForm">
            <label htmlFor="name" className="label-ContactForm ">
              MESSAGE
            </label>

            <textarea
              type="text"
              name="name"
              placeholder="Type your message for us"
              className="input-ContactForm message-ContactForm"
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
