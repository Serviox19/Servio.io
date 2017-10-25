import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//import App and Views
import { App } from '../ui/layouts/App';
import Home from '../ui/pages/Home';
import Resume from '../ui/pages/Resume';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});

FlowRouter.route('/resume', {
  action() {
    mount(App, {
      content: <Resume />
    });
  }
});
