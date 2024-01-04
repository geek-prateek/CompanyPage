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
  usertype : string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  onRegister() {
    if (
      this.username == '' ||
      this.password == '' ||
      this.confirmPassword == '' ||
      this.usertype == ''
    ) {
      alert('Please fill all the data!');
    } else {
      if (this.userService.addedUser.find(user => user.username === this.username)) {
        alert('User already registered!');
      } else {
        if (this.password !== this.confirmPassword) {
          alert('Password does not match!');
        } else {
          const newUser: UserDetails = { usertype: this.usertype, username: this.username, password: this.password };
          this.userService.addedUser.push(newUser);
          // this.showLogin.emit();
          this.router.navigate(['/login']);
          
          console.log(newUser.usertype, newUser.username, newUser.password);
        }
      }
    }
  }


  
}
