import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import { Users } from '../../../collections/users.ts'
import template from './users-form.html';

@Component({
    selector: 'users-form',
    template
})

export class UsersForm {
    
    usersForm: ControlGroup;

    constructor(){
        let fb = new FormBuilder();

        this.usersForm = fb.group({
            name: ['', Validators.required],
            email: [''] 
        });
    }

    addUser(user){
        if(this.usersForm.valid){
            Users.insert({
                name: user.name,
                email: user.email
            });
        }
        console.log(this.usersForm.value);
        console.log(this.usersForm.valid);
    }
}
