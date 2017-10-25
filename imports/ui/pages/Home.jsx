import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Scrollbar from 'smooth-scrollbar';

class Home extends Component {

  scrollBar() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3.5',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    scrollbar.addListener(function () {
      console.log(scrollbar.offset);
    });
  }

  componentDidMount() {
    this.scrollBar();
  }

  render() {
    return (
      <div id="home-page">
        <Header />
        <About />
      </div>
    );
  }
}

export default Home;
