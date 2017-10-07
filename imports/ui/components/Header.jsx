import React, { Component } from 'react';
import { Helicopter } from './Helicopter';

class Header extends Component {

  render() {

    return (
      <div className="header">
        <Helicopter />
        <div className="header-items">
          <h2>Servio Mora <br /> Full Stack Web Developer</h2>
        </div>
        <span className="arrow-link">
          <a><i className="material-icons" style={{fontSize:48}}>arrow_downward</i></a>
        </span>
      </div>
    );
  };
}

export default Header;
