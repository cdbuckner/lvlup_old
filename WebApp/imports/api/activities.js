import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Activities = new Mongo.Collection('activities');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('activities', function tasksPublication() {
    return Activities.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}


Meteor.methods({
  'activities.new'(activityId, activity, text, measurement, needsVerification, private) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Activities.insert({
      text,
      activity,
      measurement,
      needsVerification,
      private,
      tauntedBy: [],
      cheeredBy: [],
      verified: false,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'activities.delete'(activityId) {
    check(activityId, String);

    const activity = Activities.findOne(activityId);
    if (activity.private && activity.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Activities.remove(activityId);
  },
  'activities.cheer'(activityId, setChecked) {
    check(activityId, String);
    check(setChecked, Boolean);

    const activity = Activities.findOne(activityId);
    if (activity.private && activity.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Activities.update(activityId, { $set: { checked: setChecked } });
  },
  'activities.taunt'(activityId, setChecked) {
    check(activityId, String);
    check(setChecked, Boolean);

    const activity = Activities.findOne(activityId);
    if (activity.private && activity.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Activities.update(activityId, { $set: { checked: setChecked } });
  },
  'activities.setToPrivate'(activityId, setToPrivate) {
    check(activityId, String);
    check(setToPrivate, Boolean);

    const activity = Activities.findOne(activityId);

    // Make sure only the task owner can make a task private
    if (activity.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Activities.update(activityId, { $set: { private: setToPrivate } });
  },
});
