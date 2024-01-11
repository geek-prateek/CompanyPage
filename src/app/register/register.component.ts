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
  // usertype: string = '';
  // username: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  upperCase = "(?=.*?[A-Z])";
  lowerCase = "(?=.*?[a-z])";
  number = "(?=.*?[0-9])";
  specialCharacter = "(?=.*?[#?!@$%^&*-])";
  regex =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';


  registerForm = new FormGroup({
    usertype : new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  usertypeValue = this.registerForm.value.usertype;
  usernameValue = this.registerForm.value.username;
  passwordValue = this.registerForm.value.password;
  confirmPasswordValue = this.registerForm.value.confirmPassword;

  usernameLength = this.registerForm.value.username?.length ?? 0;
  passwordLength = this.registerForm.value.password?.length ?? 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onCheck() {
    if(this.usernameLength > 0){
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
    if(this.passwordLength > 0){
      if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
        this.pswContent = 'Password does not match!';
      }else{
        this.pswContent = '';
      }
    }
  }

  onRegister() {
    if (this.usernameLength > 2) {
      if (
        this.userService.addedUser.find(
          (user) => user.username === this.registerForm.value.username
        )
      ) {
        if(confirm('User already registered! Do you want to login?')){
          this.router.navigate(['/login'])
        }
        
      } else {
        if (this.passwordLength < 8 || this.passwordLength > 20) {
          alert('Password should be between 8 to 20 characters');
        } else {
          if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
            alert('Password does not match!');
          } else {
            if((this.registerForm.value.password)!.match(this.regex)){
              alert('Password should contain atleast one uppercase, one lowercase, one number and one special character!');
            }
            else{
              
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
      }
    } else {
      alert('Username should be more than 3 characters!');
    }
  }
}
