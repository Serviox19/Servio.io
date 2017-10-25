import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

class ContactForm extends Component {

  constructor() {
    super();

    this.state = {
      message: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    this.state = { message: {
      name: this.refs.name.value;
      email: this.refs.email.value;
      subject: this.refs.subject.value;
      message: this.refs.message.value;
    }};

    Meteor.call('sendEmail', this.state.message, (error) => {
      let name = this.state.message.name;
      let email = this.state.message.email;
      let subject = this.state.message.subject;
      let message = this.state.message.message;

      if (name === '') {

      } else if (email === '') {

      } else if (subject === '') {

      } else if (message === '') {

      } else if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        // reset contact form
        Bert.alert('Message Sent!', 'success');

        this.setState({
          message: {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
        });
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.subject.value = '';
        this.refs.message.value = '';
      }
    }); // end Meteor Call
    event.preventDefault();
  }

  render() {
    return (
      <div id="contact-form">
        <form>
          <div className="form-group">
            <input ref="name" type="text" required="required" />
            <label className="control-label" htmlFor="input">Name</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input ref="email" type="text" required="required" />
            <label className="control-label" htmlFor="input">Email</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input ref="subject" type="text" required="required" />
            <label className="control-label" htmlFor="input">Subject</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <textarea ref="message" required="required"></textarea>
            <label className="control-label" htmlFor="textarea">Message</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm;
