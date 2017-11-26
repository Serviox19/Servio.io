import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

class Cases extends Component {

  componentDidMount() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed':'3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    scrollbar.addListener(function () {

    });
  }

  render() {
    return (
      <div className="cases">
        <div className="wrapper">
          <a href="https://maddcoffee.com" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/madd.jpg')` }}>
            <span className="overlay">
              <div className="bg_img" style={{ backgroundColor: '#8E2051' }}></div>
            </span>
            <span className="logo">
              <img src="/images/logos/madd-logo.png" />
            </span>
          </a>
          <a href="https://shophauterebel.com/" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/haute.jpg')` }}>
            <span className="overlay">
              <div className="bg_img" style={{ backgroundColor: '#F6DC64' }}></div>
            </span>
            <span className="logo">
              <img src="/images/logos/haute-logo.png" />
            </span>
          </a>
        </div>
        <div className="wrapper">
          <a href="http://cami.com" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/cami.jpg')` }}>
            <span className="overlay">
              <div className="bg_img" style={{ backgroundColor: '#EF4639' }}></div>
            </span>
            <span className="logo">
              <img src="/images/logos/cami_logo-black.png" />
            </span>
          </a>
          <a href="https://amcreditrepair.com/" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/am-credit.jpeg')` }}>
            <span className="overlay">
              <div className="bg_img" style={{ backgroundColor: '#7CCCD2' }}></div>
            </span>
            <span className="logo">
              <img src="/images/logos/cropped-amcredit.png" />
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Cases;
