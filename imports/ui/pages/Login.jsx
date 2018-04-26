import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class LoginPage extends Component {
  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();

    let username = this.refs.username.value;
    let password = this.refs.password.value;

    let _this = this;
    if (username === '') {
      Bert.alert('Please Fill out all Fields!', 'danger');
    } else if (password === '') {
      Bert.alert('Please Fill out all Fields!', 'danger');
    } else {
      Meteor.loginWithPassword(username, password, function(error) {
        if (error) {
          Bert.alert('Not Valid User!', 'danger');
          _this.clearLoginForm();
        } else if (typeof Meteor.user().profile === 'undefined' || !Meteor.user().profile.role.includes("admin")) {
          Meteor.logout();
          FlowRouter.go('/login');
          _this.clearLoginForm();
          _this.sendCautionEmail();
          Bert.alert('Sorry No access!', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          FlowRouter.go('/dashboard');
          Bert.alert('Login Successful', 'success', 'growl-top-right');
        }
      });
    }
  }

  clearLoginForm() {
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  sendCautionEmail() {
    Meteor.call('sendWarningEmail');
  }

  render() {
    return (
      <div id="login-page">
        <div className="wrapper">
          <div className="login-container">
            <h1>Login to Admin</h1><br />
            <form onSubmit={this.handleLogin}>
              <input type="text" ref="username" placeholder="Username" required />
              <input type="password" ref="password" placeholder="Password" required />
              <input type="submit" className="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
