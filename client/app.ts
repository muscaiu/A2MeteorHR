

import 'reflect-metadata';
import { Component } from '@angular/core';
// REPLACED BY THE BELLOW ONE import { bootstrap } from '@angular/platform-browser-dynamic';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';

import { Users } from '../collections/users.ts';
import { UsersForm } from './imports/users-form/users-form'
import template from './app.html';

@Component({
  selector: 'app',
  template,
  directives: [UsersForm, ROUTER_DIRECTIVES]
})

class a2meteorhr {
    users : Mongo.Cursor<Object>;

    constructor(){
        this.users = Users.find();
    }

    removeUser(user){
        Users.remove(user._id);
        console.log("Removed " + user.name)
    }
 }

bootstrap(a2meteorhr);
