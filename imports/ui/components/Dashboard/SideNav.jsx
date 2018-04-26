import React, { Component } from 'react';

export default class SideNav extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //stuff
  }

  render() {
    return (
      <aside id="sidenav">
        <header>Servio.io</header>
        <div className="menu">
          <ul>
            <li>
              <a href="/dashboard">Home</a>
            </li>
            <li>
              <a href="/dashboard">Analytics</a>
              <div className="sub-menu">
                <ul></ul>
              </div>
            </li>
            <li>
              <a href="/dashboard/blog">Blog</a>
              <div className="sub-menu">
                <ul>
                  <li>Edit</li>
                  <li>New Post</li>
                </ul>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </aside>
    );
  }
}
