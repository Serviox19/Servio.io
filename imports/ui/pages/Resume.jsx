import React, { Component } from 'react';

class Resume extends Component {


  componentDidMount() {

  }


  skills() {
    return [
      {"_id": "1", "name": "HTML", "percentage": "95"},
      {"_id": "2", "name": "CSS & Sass", "percentage": "90"},
      {"_id": "3", "name": "Javascript & jQuery", "percentage": "78"},
      {"_id": "4", "name": "Angular", "percentage": "70"},
      {"_id": "5", "name": "Node", "percentage": "70"},
      {"_id": "6", "name": "React", "percentage": "80"},
      {"_id": "7", "name": "React Native", "percentage": "70"},
      {"_id": "8", "name": "Photoshop", "percentage": "35"},
      {"_id": "9", "name": "JSON", "percentage": "90"},
      {"_id": "10", "name": "PHP", "percentage": "55"},
      {"_id": "11", "name": "Git", "percentage": "85"},
      {"_id": "12", "name": "Wordpress", "percentage": "60"}
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
              <p><span>servio.mora19@gmail.com</span> <br /> <span><a target="_blank" href="http://github.com/serviox19">github.com/serviox19</a></span> <br /> <span>973-934-5297</span></p>
              <a target="_blank" href="http://servio.io">www.servio.io</a>
            </div>
          </div> {/* end intro-wrapper */}
          <div className="exp-wrapper">
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
            <div className="work">
              <h1>Work Experience</h1>
              <div className="wrapper">
                <div className="block">
                  <h3>Full Stack Web Developer</h3>
                  <h5>Ockupy Inc,&nbsp;&nbsp;May 2017 - Present</h5>
                  <p className="location">Edgewater NJ</p>
                </div>
                <div className="block">
                  <h3>Field Technician</h3>
                  <h5>Databit,&nbsp;&nbsp;Oct. 2016 - April 2017</h5>
                  <p className="location">Mahwah NJ</p>
                </div>
                <div className="block">
                  <h3>Web Developer Intern</h3>
                  <h5>Startup52,&nbsp;&nbsp;June - July 2016</h5>
                  <p className="location">Brooklyn NY</p>
                </div>
                <div className="block">
                  <h3>Deployment Technician</h3>
                  <h5>Valley National Bank,&nbsp;&nbsp;Dec. 2015 - Apr 2016</h5>
                  <p className="location">Wayne NJ</p>
                </div>
              </div>
            </div>
          </div> {/* end exp-wrapper */}
          <div className="skills-wrapper">
            <div className="personal">
              <h1>Personal Skills</h1>
              <h3><span className="highlight">Languages</span></h3>
              <div className="wrapper">
                <div className="skill">
                  <span><h2>98</h2></span>
                  <span className="skill-name">English</span>
                  <span className="skill-track" style={{ width: '98%' }}></span>
                </div>
                <div className="skill">
                  <span><h2>90</h2></span>
                  <span className="skill-name">Spanish</span>
                  <span className="skill-track" style={{ width: '90%' }}></span>
                </div>
              </div>
              <h3><span className="highlight">Work Skills</span></h3>
              <div className="wrapper">
                <div className="skill">
                  <span><h2>80</h2></span>
                  <span className="skill-name">Creativity</span>
                  <span className="skill-track" style={{ width: '80%' }}></span>
                </div>
                <div className="skill">
                  <span><h2>90</h2></span>
                  <span className="skill-name">Innovate</span>
                  <span className="skill-track" style={{ width: '90%' }}></span>
                </div>
                <div className="skill">
                  <span><h2>95</h2></span>
                  <span className="skill-name">Communication</span>
                  <span className="skill-track" style={{ width: '95%' }}></span>
                </div>
              </div>
            </div>
            <div className="professional">
              <h1>Professional Skills</h1>
              <div className="wrapper">
                {this.renderSkills()}
              </div>
            </div>
          </div> {/* end skills-wrapper */}
          <div className="references">
            <div className="wrapper">
              <h1>References</h1>
              <div className="block">
                <h3>Aaron Dielman</h3>
                <h5>Project Manager at Ockupy Inc</h5>
                <p>(973)&nbsp;710-7077</p>
              </div>
              <div className="block">
                <h3>Ivan Baena</h3>
                <h5>Front End Developer at Bed Bath &amp; Beyond</h5>
                <p>(201)&nbsp;657-9022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
