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
    $('#nav-icon').hover(function () {
      $(this).toggleClass('animate');
    });

    $('#nav-toggle').click(function () {
      $('.nav-list').toggleClass('open');
      $('#nav-icon').toggleClass('rotate');
    });
  }

  render() {
    return (
      <nav id="navigation">
        <div className="wrapper">
          {/* <a className="logo" href="#">Logo</a> */}
          <ul className="nav-list">
            <li><a href="/">About</a></li>
            <li><a href="">Cases</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Resume</a></li>
          </ul>
          <button id="nav-toggle">
            <div id="nav-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>
    );
  }
}

export default Nav;
