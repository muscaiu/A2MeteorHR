import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Users } from '../../../collections/users.ts';
import { UsersForm } from '../users-form/users-form'
import template from './users-list.html';

@Component({
  selector: 'app',
  template,
  directives: [UsersForm, ROUTER_DIRECTIVES]
})

export class UsersList {
    users : Mongo.Cursor<Object>;

    constructor(){
        this.users = Users.find();
    }

    removeUser(user){
        Users.remove(user._id);
        console.log("Removed " + user.name)
    }
 }