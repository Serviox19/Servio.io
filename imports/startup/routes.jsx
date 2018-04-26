import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//import App and Views
import { App } from '../ui/layouts/App';
import Home from '../ui/pages/Home';
import Resume from '../ui/pages/Resume';
import LoginPage from '../ui/pages/Login';
import Dashboard from '../ui/pages/Dashboard';
import Blog from '../ui/pages/Blog';

//static routes
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

//blog routes
FlowRouter.route('/blog', {
  action() {
    mount(App, {
      content: <Blog />
    });
  }
});

FlowRouter.route('/blog/:id', {
  action(params) {
    mount(App, {
      content: <BlogPost
        postId={params.id}
      />
    });
  }
});

//admin console
FlowRouter.route('/login', {
  action() {
    mount(App, {
      content: <LoginPage />
    });
  }
})

FlowRouter.route('/dashboard', {
  action() {
    if (!Meteor.userId() || !Meteor.user().profile.role.includes("admin")) {
      Meteor.logout();
      Bert.alert('Please Login', 'danger', 'fixed-top', 'fa-frown-o');
      FlowRouter.go('/login');
    } else {
      mount(App, {
        content: <Dashboard />
      });
    }
  }
})
