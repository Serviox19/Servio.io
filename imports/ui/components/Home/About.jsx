import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

class About extends Component {

  componentDidMount() {
    //jquery

    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed':'3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    scrollbar.addListener(function () {
      if (scrollbar.offset.y > 500) {
        $('.banner').css({
          width: '50%',
          transition: 'all 0.8s ease-in'
        });
      }
    });
  }


  render() {
    return (
      <div className="about">
        <div className="banner"></div>
        <div className="info">
          <h2>About Section</h2> <br />
          <h2>Servio Mora</h2>
        </div>
      </div>
    );
  }
}

export default About;
