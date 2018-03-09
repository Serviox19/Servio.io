import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

class Helicopter extends Component {

  handleHireMe() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    scrollbar.scrollIntoView(document.querySelector('.contact'), {
      alignToTop: true,
      offsetTop: 0
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="helicopter_wrapper">
        <div className="balloon right" onClick={this.handleHireMe.bind(this)}>
          <span className="hire-link">Hire&nbsp;Me!</span>
        </div>
        <div className="helicopter">
          <img className="helicopter_body" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20212/bladeless_helicopter.png" alt="Helicopter with no blades" />
          <img className="blade" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20212/rotary_blade.png" alt="Helicopter Blades" />
          <div className="tailblade"></div>
        </div>
      </div>
    );
  }
}

export default Helicopter;
