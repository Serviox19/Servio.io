import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';
import Header from '../components/Header';
import Bio from '../components/Bio';

class Home extends Component {

  render() {
    return (
      <scrollbar>
        <article class="scroll-content">
          <Header />
          <Bio />
        </article>
        <aside class="scrollbar-track scrollbar-track-x">
            <div class="scrollbar-thumb scrollbar-thumb-x"></div>
        </aside>
        <aside class="scrollbar-track scrollbar-track-y">
            <div class="scrollbar-thumb scrollbar-thumb-y"></div>
        </aside>
    </scrollbar>
    );
  }
}

export default Home;
