

import 'reflect-metadata';
import { Component } from '@angular/core';
// REPLACED BY THE BELLOW ONE import { bootstrap } from '@angular/platform-browser-dynamic';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Users } from '../collections/users.ts';
import { UsersForm } from './imports/users-form/users-form'

import template from './app.html';

@Component({
  selector: 'app',
  template,
  directives: [UsersForm]
})

class a2meteorhr {
    users : Mongo.Cursor<Object>;

    constructor(){
        this.users = Users.find();
    }

    removeUser(user){
        Users.remove(user._id);
    }
 }

bootstrap(a2meteorhr);
