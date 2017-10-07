import React from 'react';

export const Helicopter = () => {
  return (
    <div className="helicopter_wrapper">
      <div className="balloon right">
        <a href="">Hire Me!</a>
      </div>
      <div className="helicopter">
        <img className="helicopter_body" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20212/bladeless_helicopter.png" alt="Helicopter with no blades" />
        <img className="blade" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20212/rotary_blade.png" alt="Helicopter Blades" />
        <div className="tailblade"></div>
      </div>
    </div>
  );
}
