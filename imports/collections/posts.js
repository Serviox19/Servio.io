import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'posts-find': function(token) {
    return Posts.findOne({ _id: token });
  }
});

export const Posts = new Mongo.collection('posts');
