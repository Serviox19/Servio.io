import React, { Component } from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Skills from '../components/Skills';

import Scrollbar from 'smooth-scrollbar';

class Home extends Component {

  componentDidMount() {
    var scrollbar = Scrollbar.init({
      'speed': '1.75',
      'overscrollEffect':'bounce',
      'damping':'.04'
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Bio />
        <Skills />
      </div>
    );
  }
}

export default Home;
