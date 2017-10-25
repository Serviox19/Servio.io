import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

Meteor.methods({
  sendEmail:function (message) {
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: 'Servio Mora <servio.mora19@gmail.com>',
        from: `${message.name} ${message.email}`,
        subject: `${message.subject}`,
        text: `${message.message}`
      });
    });
  }
});
