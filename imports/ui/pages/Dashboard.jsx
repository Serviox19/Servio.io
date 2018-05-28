import React, { Component } from 'react';
import SideNav from '../components/Dashboard/SideNav';
import TopNav from '../components/Dashboard/TopNav';

export const Dashboard = ({content}) => {
  return (
    <div id="dashboard-page" style={{ background: '#FFFFFF' }}>
      <SideNav />
      <div id="dashboard-right">
        <TopNav />
        <div id="canvas">
          {content}
        </div>
      </div>
    </div>
  );
};
