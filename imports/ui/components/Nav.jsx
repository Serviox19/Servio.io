import React, { Component } from 'react';

class Nav extends Component {

  scrollBar() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed':'3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    scrollbar.addListener(function () {

    });
  }

  componentDidMount() {
    $('#nav-icon').click(function () {
      $(this).toggleClass('animate');
    });
  }

  render() {
    return (
      <nav id="navigation">
        <div className="wrapper">
          <a className="logo" href="#">Logo</a>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="">Cases</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Resume</a></li>
          </ul>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
