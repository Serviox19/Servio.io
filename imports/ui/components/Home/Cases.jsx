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
        <div id="row2">
          <div className="left">
            <a href="https://maddcoffee.com" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/madd.jpg')` }}>
              <span className="overlay" style={{ backgroundColor: '#8E2051' }}>
                <div className="bg_img"></div>
                <div className="logo"></div>
              </span>
            </a>
          </div>
          <div className="right">
            <div id="big-left">
              <a href="http://cami.com" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/cami.jpg')` }}>
                <span className="overlay" style={{ backgroundColor: '#EF4639' }}>
                  <div className="bg_img"></div>
                  <div className="logo"></div>
                </span>
              </a>
            </div>
            <div id="stacked">
              <div id="top">
                <a href="https://shophauterebel.com/" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/haute.jpg')` }}>
                  <span className="overlay" style={{ backgroundColor: '#F6DC64' }}>
                    <div className="bg_img"></div>
                    <div className="logo"></div>
                  </span>
                </a>
              </div>
              <div id="bottom">
                <a href="https://amcreditrepair.com/" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/am-credit.jpeg')` }}>
                  <span className="overlay" style={{ backgroundColor: '#7CCCD2' }}>
                    <div className="bg_img"></div>
                    <div className="logo"></div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="row1">
          <a href="https://ockupy.com" target="_blank" className="case" style={{ backgroundImage: `url('/images/cases/ockupy.jpeg')` }}>
            <span className="overlay" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="bg_img"></div>
              <div className="logo"></div>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Cases;
