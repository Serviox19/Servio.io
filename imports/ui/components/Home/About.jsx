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
  }


  render() {
    return (
      <div className="about">
        <div className="banner">
          <h1 id="one">Rockstar Dev!</h1>
          <h1 id="two">Javascript Guy</h1>
          <h1 id="three">Tech Junkie</h1>
        </div>
        <div className="info">
          <div className="intro">
            <h1>Bonjour</h1>
            <h2>My Name is Servio Mora</h2>
            <h2>I'm A Full Stack Web Developer</h2>
          </div>
          <div className="bio">
            <p>I have always been interested in technology. I started out working Help Desk since I was in High School. Over time I realized I needed to do something more impactful, which led me to coding. Now I am a Web Developer with experience and impressive projects to show for. I enjoy the daily struggles of having to learn new things constantly, and I love building stunning user experiences!</p><br />
            <p>I have always been the type of guy that has to over-deliver. Being average and just getting by has never been my style. When I develop anything I expect people to say `Woah that looks awesome`.</p>
          </div>
          <div className="links">
            <a href="https://github.com/Serviox19" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/servio-mora-b93972108/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            <a className="resume-btn" href="/resume">Resume</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
