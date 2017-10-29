import React, { Component } from 'react';
import Header from '../components/Home/Header';
import About from '../components/Home/About';
import Cases from '../components/Home/Cases';
import Scrollbar from 'smooth-scrollbar';

class Home extends Component {

  scrollBar() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3.5',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    scrollbar.addListener(function () {
      console.log(scrollbar.offset.y);
    });
  }

  componentDidMount() {
    this.scrollBar();
  }

  render() {
    return (
      <div id="home-page">
        <Header />
        <div className="load-wrapper">
          <About />
          <Cases />
        </div>
      </div>
    );
  }
}

export default Home;
