import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-items">
        <h2>Servio</h2>
        <a className="link">Link</a>
      </div>
      <span className="arrow-link">
        <a><i className="material-icons" style={{fontSize:48}}>arrow_downward</i></a>
      </span>
    </div>
  );
};

export default Header;
