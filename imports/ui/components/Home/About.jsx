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
          <h1>Bonjour</h1>
          <h2>My Name is Servio Mora</h2>
          <h2>I'm A Full Stack Web Developer</h2>
          <div className="bio">
            <p>I have always been interested in technology. I started out working Help Desk since I was in High School. Over time I realized I needed to do something more impactful, which led me to coding. Now I am a Web Developer with experience and impressive projects to show for. I enjoy the daily struggles of having to learn new things constantly, and I love building stunning user experiences!</p>
            <p>I have always been the type of guy that has to over-deliver. Being average and just getting by has never been my style. When I develop anything I expect people to say `Woah that looks awesome`.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
