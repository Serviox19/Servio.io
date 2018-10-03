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
      setTimeout(function () {
        $('.wrapper').css({
          'display': 'flex',
          'opacity': 1,
          'transition': 'all 0.7s ease-in'
        });
      }, 990)
    }, 5000);
  }

  render() {
    return (
      <div className="avex-page">
        <div className="preloader">
          <h1 className="top-title">Hello Avex Designs!</h1>
          <h1 className="bottom-text">Are You Ready For This??</h1>
        </div>
        <div className="wrapper">
          <section className="section-1">
            <div className="container">
              <h1 className="title">Past Work</h1>
              <div className="block-1">
                <img className="left" src="/images/avex/madd-1.png" />
                <img className="right" src="/images/avex/madd-2.png" />
              </div>
              <div className="block-2">
                <img src="/images/avex/jetson-1.png" />
                <img src="/images/avex/jetson-2.png" />
              </div>
              <div className="block-3">
                <img src="/images/avex/jetson-m-1.png" />
                <img src="/images/avex/jetson-m-2.png" />
                <img src="/images/avex/jetson-m-3.png" />
              </div>
            </div>
          </section>
          <section className="section-2">
            <div className="container">
              <h1 className="title">Recent Work</h1>
              <br />
              <h3 className="subheading">Automatic Locking Phone Mount</h3>
              <div className="block-1">
                <img src="/images/avex/phone-mount-1.png" />
                <img src="/images/avex/phone-mount-2.png" />
                <img src="/images/avex/phone-mount-3.png" />
                <img src="/images/avex/phone-mount-4.png" />
              </div>
              <h3 className="subheading">Sticky Pad</h3>
              <div className="block-2">
                <img src="/images/avex/sticky-1.png" />
                <img src="/images/avex/sticky-2.png" />
                <img src="/images/avex/sticky-3.png" />
                <img src="/images/avex/sticky-4.png" />
              </div>
            </div>
          </section>
          <section className="section-3">
            <div className="container">
              <h1 className="title">Currently Working On</h1>
              <br />
              <h3 className="subheading">9H Nano Redesign</h3>
              <div className="block-1">
                <img src="/images/avex/9h-old-1.png" />
                <img src="/images/avex/9h-old-2.png" />
                <img src="/images/avex/9h-old-3.png" />
              </div>
              <div className="block-2">
                <img src="/images/avex/9h-new-1.png" />
                <img src="/images/avex/9h-new-2.png" />
                <img src="/images/avex/9h-new-3.png" />
                <img src="/images/avex/9h-new-4.png" />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
