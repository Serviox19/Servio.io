import React, { Component } from 'react';
import SideNav from '../components/Dashboard/SideNav';
import TopNav from '../components/Dashboard/TopNav';

export const Dashboard = ({content}) => {
  return (
    <div>
      <SideNav />
      <div id="dashboard-right">
        <TopNav />
        {content}
      </div>
    </div>
  );
};
