import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <nav id="mobile_nav">
        <div className="wrapper">
          <h1>Servio.io</h1>
          <button>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>
    );
  }
}

export default MobileNav;
