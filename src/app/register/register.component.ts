import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../login/user.service';
import { UserDetails } from '../login/UserDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // @Output() showLogin = new EventEmitter<boolean>();

  content : string = '';
  pswContent : string = '';
  upperCase = "(?=.*?[A-Z])";
  lowerCase = "(?=.*?[a-z])";
  number = "(?=.*?[0-9])";
  specialCharacter = "(?=.*?[#?!@$%^&*-])";
  regex =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';


  registerForm = new FormGroup({
    usertype : new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.regex)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onCheck() {
    const usernameLength = this.registerForm.value.username?.length ?? 0;
    if(usernameLength > 0){
      if (
        this.userService.addedUser.find(
          (user) => user.username === this.registerForm.value.username
        )
      ) {
        if(confirm('User already registered ! Do you want to login?')){
          this.router.navigate(['/login'])
        }
      }
    }
    
  }


  onConfirmCheck(){
    const passwordLength = this.registerForm.value.password?.length ?? 0;
    if(passwordLength > 0){
      if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
        this.pswContent = 'Password does not match!';
      }else{
        this.pswContent = '';
      }
    }
  }

  onRegister() {
    if(this.registerForm.valid){
      const newUser: UserDetails = {
        usertype: this.registerForm.value.usertype,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
      };
      this.userService.addedUser.push(newUser);
      // this.showLogin.emit();
      this.router.navigate(['/login']);
      console.log(newUser.usertype, newUser.username, newUser.password);
    }
  }
}
