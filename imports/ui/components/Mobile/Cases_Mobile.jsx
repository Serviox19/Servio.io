import React, { Component } from 'react';

class MobileCases extends Component {

  componentDidMount() {
    //jquery
  }

  cases() {
    return [
      {"_id": "1", "url": "https://maddcoffee.com", "logo": "/images/logos/madd-logo.png", "bg_img": "/images/cases/madd.jpg", "bg_color": "#8E2051"},
      {"_id": "2", "url": "http://cami.com", "logo": "/images/logos/cami_logo-black.png", "bg_img": "/images/cases/cami.jpg", "bg_color": "#EF4639"},
      {"_id": "3", "url": "https://shophauterebel.com/", "logo": "/images/logos/haute-logo.png", "bg_img": "/images/cases/haute.jpg", "bg_color": "#F6DC64"},
      {"_id": "4", "url": "https://amcreditrepair.com/", "logo": "/images/logos/cropped-amcredit.png", "bg_img": "/images/cases/am-credit.jpeg", "bg_color": "#7CCCD2"},
      {"_id": "5", "url": "https://ockupy.com", "logo": "/images/logos/ockupy-logo.png", "bg_img": "/images/cases/ockupy.jpeg", "bg_color": "#FFFFFF"}
    ]
  }

  renderCases() {
    return this.cases.map((case) => {
      return (
        <a href={case.url} target="_blank" className="case" key={case._id}>
          <span className="overlay" style={{ backgroundColor: case.bg_color }}>
            <span className="logo">
              <img src={case.logo} />
            </span>
          </span>
          <div className="bg_img">
            <img src={case.bg_color} />
          </div>
        </a>
      )
    });
  }

  render() {
    return (
      <div className="mobile_cases">
        <div className="cases">
          {this.renderCases()}
        </div>{/* End Cases Wrapper */}
      </div>
    );
  }
}

export default MobileCases;
