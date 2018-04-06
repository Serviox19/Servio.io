import React from 'react';
import MobileNav from '../components/Mobile/Mobile_Nav';
import { MobileAbout } from '../components/Mobile/Mobile_About';
import MobileCases from '../components/Mobile/Mobile_Cases';
import { MobileFooter } from '../components/Mobile/Mobile_Footer';

export const MobileView = () => {
  return (
    <div id="mobile-home">
      <MobileNav />
      <MobileAbout />
      <MobileCases />
      <MobileFooter />
    </div>
  );
}
