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
  }

  render() {
    return (
      <nav id="mobile_nav">
        <div className="wrapper">
          <h1>Servio.io</h1>
          <button onClick={() => alert('Nav Toggle!')}>
            <div>
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

export default MobileNav;
