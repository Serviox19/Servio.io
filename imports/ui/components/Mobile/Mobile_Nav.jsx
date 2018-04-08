import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(window).scroll(function () {
      if ($(window).scrollTop() < 60) {
        $('#mobile_nav').removeClass('fixed');
      }
      if ($(window).scrollTop() > 60) {
        $('#mobile_nav').addClass('fixed');
      }
    });

    $('#nav-icon').on('click', function () {
      $(this).toggleClass('open');
      $('#mobile_nav').find('.dropdown-menu > li').toggleClass('toggled');
    });
  }

  render() {
    return (
      <nav id="mobile_nav">
        <div className="wrapper">
          <h1>Servio.io</h1>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="dropdown-menu">
            <li><a href="#">Cases</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MobileNav;
