import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //stuff
  }

  render() {
    return (
      <div id="login-page">
        <div className="wrapper">
          <div className="login-container">
            <h1>Login to Admin</h1><br />
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" className="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
