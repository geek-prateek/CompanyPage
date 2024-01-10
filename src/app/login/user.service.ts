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
            password: 'Prateek@123'
        },
        {
            usertype: 'superadmin',
            username: 'shoaib',
            password: 'Shoaib@123'
        },
        {
            usertype: 'superadmin',
            username: 'faizan',
            password: 'Faizan@123'
        },
        {
            usertype: 'superadmin',
            username: 'krutik',
            password: 'Krutik@123'
        },
        {
            usertype: 'admin',
            username: 'amod',
            password: 'Amod@123'
        }
    ]

    getUsertype() {
        const foundUser = this.addedUser.find(user => user.username === this.username);
        return foundUser ? foundUser.usertype : undefined;
    }


}