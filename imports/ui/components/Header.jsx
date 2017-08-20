import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-items">
          <h2>Servio Mora</h2>
          <h2>Full Stack Web Developer</h2>
          <a href="" className="link">Hire Me</a>
        </div>
        <span className="arrow-link">
          <a><i className="material-icons" style={{fontSize:48}}>arrow_downward</i></a>
        </span>
      </div>
    );
  };
}

export default Header;
