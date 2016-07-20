

import 'reflect-metadata';
import { Component } from '@angular/core';
// REPLACED BY THE BELLOW ONE import { bootstrap } from '@angular/platform-browser-dynamic';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Users } from '../collections/users.ts';

import template from './app.html';

@Component({
  selector: 'app',
  template
})
class a2meteorhr {
    users : Mongo.Cursor<Object>;

    constructor(){
        this.users = Users.find();
    }
 }

bootstrap(a2meteorhr);
