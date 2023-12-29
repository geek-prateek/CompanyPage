import { Injectable, OnInit } from "@angular/core";
import { UserDetails } from "./UserDetails";

@Injectable()
export class UserService {

    username: string = '';
    
    // flag: boolean = false;
    
    addedUser: UserDetails[] = [
        {
            usertype: 'admin',
            username: 'prateek',
            password: 'prateek'
        },
        {
            usertype: 'superadmin',
            username: 'shoaib',
            password: 'shoaib'
        },
        {
            usertype: 'superadmin',
            username: 'faizan',
            password: 'faizan'
        },
        {
            usertype: 'superadmin',
            username: 'krutik',
            password: 'krutik'
        },
        {
            usertype: 'admin',
            username: 'amod',
            password: 'amod'
        }
    ]

    getUsertype() {
        const foundUser = this.addedUser.find(user => user.username === this.username);
        return foundUser ? foundUser.usertype : undefined;
    }


}