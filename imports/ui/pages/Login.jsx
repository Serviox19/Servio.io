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
          Bert.alert(error.reason, 'danger');
          console.log(error.reason);
        } else {
          FlowRouter.go('/dashboard');
          Bert.alert('Login Successful', 'success');
        }
      });
    }
  }

  clearLoginForm() {
    this.refs.username.value = '';
    this.refs.password.value = '';
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
