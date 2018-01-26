import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Nav from '../components/Nav';
import About from '../components/Home/About';
import Cases from '../components/Home/Cases';
import { Contact } from '../components/Home/Contact';
import Scrollbar from 'smooth-scrollbar';

class Home extends Component {

  componentDidMount() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    //fixes need fo double click to scroll
    setTimeout(function () {
      scrollbar.scrollIntoView(document.querySelector('.header'), {
        alignToTop: true,
        offsetTop: 0
      });
    }, 3100);

    scrollbar.addListener(function () {
      if (scrollbar.offset.y >= 2000 ) {
        $('#scrollTop').css({ display: 'flex' });
      }
    });
  }

  scrollTop() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });
    scrollbar.scrollTo(0,0, 1000);
  }

  render() {
    return (
      <div id="home-page">
        <Nav />
        <Header />
        <div className="load-wrapper">
          <About />
          <Cases />
          <Contact />
        </div>
        <a id="scrollTop" onClick={this.scrollTop.bind(this)}><i className="material-icons" style={{fontSize:30}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default Home;
