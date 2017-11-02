import React, { Component } from 'react';

class Nav extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <nav id="navigation">
          <div className="wrapper">
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="">Cases</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Resume</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
