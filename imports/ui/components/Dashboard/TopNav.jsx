import React, { Component } from 'react';

export default class TopNav extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    //stuff
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
      <nav id="topnav">
        <div className="left">
          <button id="side-nav-toggle"><i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
        <div className="right">
          <a href="" onClick={this.logout}>Logout</a>
        </div>
      </nav>
    );
  }
}
