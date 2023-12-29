import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { UserDetails } from './UserDetails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username : string="";
    password: string ="";

    // @Output() loggedIn = new EventEmitter<boolean>();
    // @Output() showSignup = new EventEmitter<boolean>();
    

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute){ }
    

    onClicked(){
        if(this.userService.addedUser.find(user => user.username === this.username && user.password === this.password)){
            console.log("Succesfully logged IN");
            this.userService.username = this.username;

            // this.loggedIn.emit(true);
            this.router.navigate(['/company']);

        }else{
            alert("Please Try again!")
        }
        this.username='';
        this.password='';
    }
    onRegister(){
        // this.showSignup.emit(true);
        this.router.navigate(['/register']);
    }

}
