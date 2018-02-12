import React, { Component } from 'react';
import Helicopter from '../Helicopter';
import Scrollbar from 'smooth-scrollbar';

class Header extends Component {

  componentDidMount() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    $('.arrow-link').on('click', function () {
      scrollbar.scrollIntoView(document.querySelector('.about'), {
        alignToTop: true,
        offsetTop: 0
      });
    });

    function spinner() {
      $('.loader').css({ display: 'none' });
      $('.load-wrapper').css({ display: 'flex' });
      $('#navigation').css({ opacity: 1 });
      $('.header-items > h2').css({ animationPlayState: 'running' });
      $('.helicopter_wrapper').css({
        animationPlayState: 'running',
        visibility: 'visible'
      });
    }
    setTimeout(spinner, 3000); //spinny timer 3000
    setTimeout(() => {
      $('.header-items').addClass('animate');
    }, 6200);

    $('.helicopter_wrapper').mouseover(function () {
      $(this).css({ animationPlayState: 'paused' });
    });

    $('.helicopter_wrapper').mouseout(function () {
      $(this).css({ animationPlayState: 'running' });
    });
  }

  componentDidUpdate() {
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
          <h2>Servio Mora <br /> Web Developer</h2>
        </div>
        <span className="arrow-link">
          <a><i className="material-icons" style={{fontSize:48}}>arrow_downward</i></a>
        </span>
      </div>
    );
  };
}

export default Header;
