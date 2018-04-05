import React from 'react';

export const MobileFooter = () => {
  return (
    <div id="mobile_footer">
      <div className="wrapper">
        <div className="links">
          <span>
            <a
              href="https://github.com/Serviox19"
              target="_blank">
              <img src="/images/icons/github.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/servio-m-b93972108/" target="_blank">
              <img src="/images/icons/linkedin.svg" />
            </a>
          </span>
        </div>
        <div className="copyright">
          <p>&copy; 2018 Servio.io</p>
        </div>
      </div>
    </div>
  );
}
