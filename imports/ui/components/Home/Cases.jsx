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
            <a href="https://maddcoffee.com" target="_blank" className="case">
              <span className="overlay" style={{ backgroundColor: '#8E2051' }}>
                <span className="logo">
                  <img src="/images/logos/madd-logo.png" />
                </span>
              </span>
              <div className="bg_img">
                <img src="/images/cases/madd.jpg" />
              </div>
            </a>
          </div>
          <div className="right">
            <div id="big-left">
              <a href="http://cami.com" target="_blank" className="case">
                <span className="overlay" style={{ backgroundColor: '#EF4639' }}>
                  <span className="logo">
                    <img src="/images/logos/cami_logo-black.png" />
                  </span>
                </span>
                <div className="bg_img">
                  <img src="/images/cases/cami.jpg" />
                </div>
              </a>
            </div>
            <div id="stacked">
              <div id="top">
                <a href="https://shophauterebel.com/" target="_blank" className="case">
                  <span className="overlay" style={{ backgroundColor: '#F6DC64' }}>
                    <span className="logo">
                      <img src="/images/logos/haute-logo.png" />
                    </span>
                  </span>
                  <div className="bg_img">
                    <img src="/images/cases/haute.jpg" />
                  </div>
                </a>
              </div>
              <div id="bottom">
                <a href="https://amcreditrepair.com/" target="_blank" className="case">
                  <span className="overlay" style={{ backgroundColor: '#7CCCD2' }}>
                    <span className="logo">
                      <img src="/images/logos/cropped-amcredit.png" />
                    </span>
                  </span>
                  <div className="bg_img">
                    <img src="/images/cases/am-credit.jpeg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="row1">
          <a href="https://ockupy.com" target="_blank" className="case">
            <span className="overlay" style={{ backgroundColor: '#FFFFFF' }}>
              <span className="logo">
                <img src="/images/logos/ockupy-logo.png" />
              </span>
            </span>
            <div className="bg_img">
              <img src="/images/cases/ockupy.jpeg" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Cases;
