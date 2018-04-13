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

    $('.dropdown-menu > li > a').on('click', function () {
      $('#nav-icon').toggleClass('open');
      $('#mobile_nav').find('.dropdown-menu > li').toggleClass('toggled');
    });
  }

  scrollToAbout() {
    console.log('scroll to about');
  }

  scrollToCases() {
    console.log('scroll to cases');
  }

  render() {
    return (
      <nav id="mobile_nav">
        <div className="wrapper">
          <a className="title"><h1
            onClick={() =>
              $('html, body').animate({
                scrollTop: 0}, 400)
            }>Servio.io</h1></a>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="dropdown-menu">
            <li><a onClick={this.scrollToAbout}>About</a></li>
            <li><a onClick={this.scrollToCases}>Cases</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MobileNav;
