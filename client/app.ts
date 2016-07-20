

import 'reflect-metadata';
import { Component } from '@angular/core';
// REPLACED BY THE BELLOW ONE import { bootstrap } from '@angular/platform-browser-dynamic';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';

import template from './app.html';

@Component({
  selector: 'app',
  template
})
class a2meteorhr {
    users : Array<Object>;

    constructor(){
        this.users = [
            {name: 'test1',
             email: 'test1@test.test'
            },
            {name: 'test2',
             email: 'test2@test.test'
            },
            {name: 'test3',
             email: 'test3@test.test'
            },
        ]
    }
 }

bootstrap(a2meteorhr);
