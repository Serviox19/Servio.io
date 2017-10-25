import React, { Component } from 'react';
import { Helicopter } from './Helicopter';

class Header extends Component {

  componentDidMount() {
    function spinner() {
      $('.loader').css({ display: 'none' });
      $('.about').css({ display: 'flex' });
      $('.header-items > h2').css({ animationPlayState: 'running' });
      $('.helicopter_wrapper').css({ animationPlayState: 'running' });
    }
    setTimeout(spinner, 3000);
    setTimeout(() => {
      $('.header-items').addClass('animate');
    }, 7200);

    $('.helicopter_wrapper').mouseover(function () {
      $(this).css({ animationPlayState: 'paused' });
    });

    $('.helicopter_wrapper').mouseout(function () {
      $(this).css({ animationPlayState: 'running' });
    });
  }

  componentWillUpdate() {
    $('.loader').css({ display: 'none !important' });
  }


  render() {
    return (
      <div className="header">
        <div className="loader">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
        <Helicopter />
        <div className="header-items">
          <h2>Servio Mora <br /> Full Stack Web Developer</h2>
        </div>
        <span className="arrow-link">
          <a><i className="material-icons" style={{fontSize:48}}>arrow_downward</i></a>
        </span>
      </div>
    );
  };
}

export default Header;
