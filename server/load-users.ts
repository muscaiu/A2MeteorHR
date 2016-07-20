import { Users } from '../collections/users.ts';

export function loadUsers(){
    if(Users.find().count() === 0){ //if db is empty

        var users = [
            {name: 'seed1',
             email: 'seed1@ss.ss'
            },
            {name: 'seed2',
             email: 'seed2@ss.ss'
            },
            {name: 'seed2',
             email: 'seed2@ss.ss'
            }
        ];

        for (var i=0; i < users.length; i++){
            Users.insert(users[i]);
        }
    }
}