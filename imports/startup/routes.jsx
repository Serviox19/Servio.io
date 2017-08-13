import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//import App and Views

import { App } from '../ui/layouts/App.jsx';
import Home from '../ui/views/Home.jsx';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});
