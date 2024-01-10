import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../login/user.service';
import { UserDetails } from '../login/UserDetails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // @Output() showLogin = new EventEmitter<boolean>();
  usertype: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  upperCase = "(?=.*?[A-Z])";
  lowerCase = "(?=.*?[a-z])";
  number = "(?=.*?[0-9])";
  specialCharacter = "(?=.*?[#?!@$%^&*-])";
  regex =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onRegister() {
    if (this.username.length > 2) {
      if (
        this.userService.addedUser.find(
          (user) => user.username === this.username
        )
      ) {
        alert('User already registered!');
      } else {
        if (this.password.length < 8 || this.password.length > 20) {
          alert('Password should be between 8 to 20 characters');
        } else {
          if (this.password !== this.confirmPassword) {
            alert('Password does not match!');
          } else {
            if(!this.password.match(this.regex)){
              alert('Password should contain atleast one uppercase, one lowercase, one number and one special character!');
            }
            else{
              
              const newUser: UserDetails = {
                usertype: this.usertype,
                username: this.username,
                password: this.password,
              };
              this.userService.addedUser.push(newUser);
              // this.showLogin.emit();
              this.router.navigate(['/login']);
  
              console.log(newUser.usertype, newUser.username, newUser.password);
            }
          }
        }
      }
    } else {
      alert('Username should be more than 3 characters!');
    }
  }
}
