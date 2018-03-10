import React from 'react';
import ContactForm from '../ContactForm';

export const Contact = () => {
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
