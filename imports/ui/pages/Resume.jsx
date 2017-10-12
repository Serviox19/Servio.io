import React, { Component } from 'react';

class Resume extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div id="page-content-wrapper">
          <div className="intro-wrapper">
            <div className="block">
              <div className="image"></div>
              <span className="name"><h2>Servio Mora</h2></span>
            </div>
            <div className="block about">
              <h2 className="title">Full Stack Web Developer</h2> <br />
              <h2 style={{ alignSelf: 'flex-start' }}>About Me</h2>
              <p style={{ marginBottom: '2em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
            <div className="block info">
              <h2>Address</h2>
              <p>32 Merrill Rd, Clifton NJ 07012</p>
              <h2>Contact</h2>
              <p><span>servio.mora19@gmail.com</span> <br /> <span>github.com/erviox19</span> <br /> <span>973-934-5297</span></p>
              <a target="_blank" href="http://servio.io">www.servio.io</a>
            </div>
          </div> {/* end intro-wrapper */}
          <div className="exp-wrapper">
            <div className="education">
              <h1>Education</h1>
            </div>
            <div className="work">
              <h1>Work Experience</h1>
            </div>
          </div> {/* end exp-wrapper */}
        </div>
      </div>
    );
  }
}

export default Resume;
