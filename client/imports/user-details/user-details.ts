import { Component, NgZone} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { Users } from '../../../collections/users.ts';
import template from './user-details.html';

@Component({
    selector: 'user-details',
    template,
    directives: [ROUTER_DIRECTIVES]
})

export class UserDetails {
    userId;
    user;

    constructor(private route: ActivatedRoute,
                private ngZone: NgZone)
                {}

    ngOnInit(){
        this.route.params.subscribe((params) =>{
            this.userId = params['userId'];

            Tracker.autorun(() =>{
                this.ngZone.run(() =>{
                    this.user = Users.findOne(this.userId);    
                });
            });
        });
    }

    saveUser(user){
        Users.update(user._id,{
            $set: {
                name: user.name,
                email: user.email
            }
        });
    }
}