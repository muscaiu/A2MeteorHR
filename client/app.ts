import 'reflect-metadata';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { UsersList } from './imports/users-list/users-list.ts';
import { UserDetails } from './imports/user-details/user-details.ts';
//import { template } from './app.html';

@Component({
  selector: 'app',
  template : `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

class a2meteorhr {}

  const routes: RouterConfig = [
    {path: '',               component: UsersList },
    {path: 'user/:userId',   component: UserDetails }
  ]

  const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
  ];

bootstrap(a2meteorhr,
          [APP_ROUTER_PROVIDERS, 
           provide(APP_BASE_HREF,{ useValue: '/' })]
          );
