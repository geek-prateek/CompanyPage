import { Injectable, OnInit } from "@angular/core";
import { UserDetails } from "./UserDetails";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class UserService {

    username: string | undefined | null;

    constructor(private router: Router, private route: ActivatedRoute){}
    
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
        if(foundUser){
            localStorage.setItem('usertype', JSON.stringify(foundUser.usertype));
            return foundUser.usertype;
        }
        return undefined;
    }

    autoLogin(){
        const userData = localStorage.getItem('usertype');
        if(!userData){
            return;
        }


    }

    logout(){
        this.username = '';
        this.router.navigate(['../login'], {relativeTo: this.route});
    }

}