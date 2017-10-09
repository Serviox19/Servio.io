import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL="smtp://postmaster@sandboxf4b0cbcc9b614627a1d5a39ede74bdd7.mailgun.org:9fac75220647bff019c84da17062bea0@smtp.mailgun.org:587";
});
