import { Meteor } from 'meteor/meteor';
import { loadUsers } from './load-users.ts'

Meteor.startup(loadUsers);
