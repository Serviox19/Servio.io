import React, { Component } from 'react';

//Layouts
import DesktopView from '../layouts/Desktop';
import { MobileView } from '../layouts/Mobile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isDesktop: false };

    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.updateView();
    window.addEventListener("resize", this.updateView);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateView);
  }

  updateView() {
    this.setState({ isDesktop: window.innerWidth >= 1000 })
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
          <DesktopView />
        ) : (
          <MobileView />
        )}
      </div>
    );
  }
}

export default Home;
