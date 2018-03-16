import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import { Bert } from 'meteor/themeteorchef:bert';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#donate").on('mouseover', function () {
      Bert.defaults = {
        hideDelay: 5000,
        style: 'fixed-top',
        type: 'default'
        // Accepts: default, success, info, warning, danger.
      };
      Bert.alert({
        message: 'I have found that amoung its other benefits, giving liberates the soul of the giver  -  Maya Angelou'
      });
    });
  }

  render() {
    return (
      <div className="contact">
        <h1 className="contact-title">Let's Chat!</h1>
        <ContactForm />
        <div id="donate" style={{ marginTop: '1.5em' }}>
          <form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="VGFCDAQE3UXEA" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" name="submit" alt="PayPal - Donate" />
           <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
         </form>
        </div>
      </div>
    );
  }
}
