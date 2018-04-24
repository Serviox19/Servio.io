import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    Meteor.logout(function(error) {
      if (!error) {
        FlowRouter.go('/login');
      } else {
        Bert.alert(error.reason, 'danger');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
        <a href="" onClick={this.logout}>Logout</a>
      </div>
    );
  }
}
