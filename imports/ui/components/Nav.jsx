import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

class Nav extends Component {

  scrollBar() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed':'3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    $('#about-link').click(function () {
      $('.nav-list').toggleClass('open');
      $('#nav-icon').toggleClass('rotate');
      scrollbar.scrollIntoView(document.querySelector('.about'), {
        alignToTop: true,
        offsetTop: 0
      });
    });
    $('#cases-link').click(function () {
      $('.nav-list').toggleClass('open');
      $('#nav-icon').toggleClass('rotate');
      scrollbar.scrollIntoView(document.querySelector('.cases'), {
        alignToTop: true,
        offsetTop: 0
      });
    });
    $('#contact-link').click(function () {
      $('.nav-list').toggleClass('open');
      $('#nav-icon').toggleClass('rotate');
      scrollbar.scrollIntoView(document.querySelector('.contact'), {
        alignToTop: true,
        offsetTop: 0
      });
    });
  }

  componentDidMount() {
    this.scrollBar();
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
            <li><a id="about-link">About</a></li>
            <li><a id="cases-link">Cases</a></li>
            <li><a id="contact-link">Contact</a></li>
            <li><a href="/resume">Resume</a></li>
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
