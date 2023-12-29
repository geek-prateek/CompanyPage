import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserDetails } from './login/UserDetails';
import { UserService } from './login/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'company-page';
  isLoggedIn: boolean = false;
  showSignup: boolean = false;


  onLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  toggleSignup(showSignup: boolean) {
    this.showSignup = showSignup;
  }

  toggleLogin(){
    this.showSignup = false;
  }
}
