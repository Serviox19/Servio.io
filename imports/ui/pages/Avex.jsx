import React, { Component } from 'react';

export default class AvexPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(function () {
      $('.top-title').css({
        'opacity': 1,
        'top': '5em',
        'transition': 'all .6s ease-in'
      });
    }, 1700);
    setTimeout(function () {
      $('.bottom-text').css({
        'opacity': 1,
        'bottom': '5em',
        'transition': 'all .6s ease-in'
      });
    }, 2500);
    setTimeout(function () {
      $('.preloader').addClass('fadeout');
    }, 5000);
  }

  render() {
    return (
      <div className="avex-page">
        <div className="preloader">
          <h1 className="top-title">Hello Avex Designs!</h1>
          <h1 className="bottom-text">Are You Ready For This??</h1>
        </div>
        <h2>Avex Page</h2>
      </div>
    );
  }
}
