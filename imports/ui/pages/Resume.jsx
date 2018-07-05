import React, { Component } from 'react';
import Nav from '../components/Nav';

class Resume extends Component {

  componentDidMount() {};

  skills() {
    return [
      {_id: 1, name: "HTML", percentage: "95"},
      {_id: 2, name: "CSS & Sass", percentage: "90"},
      {_id: 3, name: "Javascript & jQuery", percentage: "78"},
      {_id: 4, name: "Angular", percentage: "70"},
      {_id: 5, name: "Node", percentage: "70"},
      {_id: 6, name: "React", percentage: "80"},
      {_id: 7, name: "React Native", percentage: "70"},
      {_id: 8, name: "Photoshop", percentage: "35"},
      {_id: 9, name: "JSON", percentage: "90"},
      {_id: 10, name: "PHP", percentage: "55"},
      {_id: 11, name: "Git", percentage: "85"},
      {_id: 12, name: "Wordpress", percentage: "60"}
    ]
  }

  renderSkills() {
    return this.skills().map((skill) => {
      return (
        <div className="skill" key={skill._id}>
          <span><h2>{skill.percentage}</h2></span>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-track" style={{ width: skill.percentage +'%' }}></span>
        </div>
      );
    });
  }


  render() {
    return (
      <div id="resume-page">
        <div id="page-content-wrapper">
          <div id="link-wrapper">
            <a id="home-link" href="/">Home</a>
          </div>
          <div className="intro-wrapper">
            <div className="block">
              <div className="image"></div>
              <div className="my_info">
                <span className="name"><h2>Servio Mora</h2></span> <br />
                <span className="title"><h2>Full Stack Web Developer</h2></span>
                <div className="links">
                  <span><a target="_blank" href="http://github.com/serviox19">github.com/serviox19</a></span>
                  <span><a target="_blank" href="http://servio.io">servio.io</a></span>
                </div>
              </div>
            </div>
            <div className="resume-about">
              <div className="wrapper">
                <h2>About Me</h2>
                <p>My name is Servio Mora, a tech enthusiast turned developer looking to make an impact on the world through innovative software and unique user experiences.</p>
                <p>Constant self improvement and dedication to continuous education is how I keep progressing, and I'm not close to being finished.</p>
                <div className="info">
                  <span>
                    <h3>Contact</h3>&nbsp;&nbsp;
                    <p>servio.mora19[at]gmail.com</p>
                  </span>
                  <span>973-934-5297</span>
                  <span>
                    <h3>Location</h3>&nbsp;&nbsp;
                    <p>Clifton NJ 07012</p>
                  </span>
                </div>
              </div>
            </div>
          </div> {/* end intro-wrapper */}
          <div className="exp-wrapper">
            <div className="work">
              <h1>Work Experience</h1>
              <div className="wrapper">
                <div className="block">
                  <div className="position">
                    <h3>Full Stack Web Developer</h3>
                    <h5>Ockupy Inc,&nbsp;&nbsp;May 2017 - March 2018</h5>
                    <p className="location">Edgewater NJ</p>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar porta ultrices. Cras pharetra suscipit urna a malesuada. Nulla sollicitudin, lectus eget vestibulum posuere, nibh enim blandit eros, non eleifend neque nulla ac nibh.
                  </div>
                </div>
                <div className="block">
                  <div className="position">
                    <h3>Field Technician</h3>
                    <h5>Databit,&nbsp;&nbsp;Oct. 2016 - April 2017</h5>
                    <p className="location">Mahwah NJ</p>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar porta ultrices. Cras pharetra suscipit urna a malesuada. Nulla sollicitudin, lectus eget vestibulum posuere, nibh enim blandit eros, non eleifend neque nulla ac nibh.
                  </div>
                </div>
                <div className="block">
                  <div className="position">
                    <h3>Web Developer Intern</h3>
                    <h5>Startup52,&nbsp;&nbsp;June - July 2016</h5>
                    <p className="location">Brooklyn NY</p>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar porta ultrices. Cras pharetra suscipit urna a malesuada. Nulla sollicitudin, lectus eget vestibulum posuere, nibh enim blandit eros, non eleifend neque nulla ac nibh.
                  </div>
                </div>
                <div className="block">
                  <div className="position">
                    <h3>Deployment Technician</h3>
                    <h5>Valley National Bank,&nbsp;&nbsp;Dec. 2015 - Apr 2016</h5>
                    <p className="location">Wayne NJ</p>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar porta ultrices. Cras pharetra suscipit urna a malesuada. Nulla sollicitudin, lectus eget vestibulum posuere, nibh enim blandit eros, non eleifend neque nulla ac nibh.
                  </div>
                </div>
              </div>
            </div>
          </div> {/* end exp-wrapper */}
          <div className="skills-wrapper">
            <div className="professional">
              <h1>Professional Skills</h1>
              <div className="wrapper">
                {this.renderSkills()}
              </div>
            </div>
          </div> {/* end skills-wrapper */}
          <div className="extra-info">
            <div className="education">
              <h1>Education</h1>
              <div className="block">
                <h3>Rutgers University</h3>
                <h5>Rutgers Coding Bootcamp, Full Stack Web Dev.</h5>
                <p className="location">New Brunswick NJ</p>
              </div>
              <div className="block">
                <h3>Passaic County Communuty College</h3>
                <h5>Associates Degree in Information Technology</h5>
                <p className="location">Passaic County NJ</p>
              </div>
            </div>
            <div className="references">
              <div className="wrapper">
                <h1>References</h1>
                <div className="block">
                  <h3>Ivan Baena</h3>
                  <h5>Front End Developer at Bed Bath &amp; Beyond</h5>
                  <p>(201)&nbsp;657-9022</p>
                </div>
                <div className="block">
                  <h3>Moshe Amsel</h3>
                  <h5>Sales Engineer / Project Manager at Databit</h5>
                  <p>(845)&nbsp;517-8477</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
