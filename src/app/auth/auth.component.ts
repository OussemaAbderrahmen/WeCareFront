import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../components/user/user.component';
import { AuthService } from './auth.service';
import { UserStored } from './user-stored';
interface alerts {
  border: string;
  background: string;
  color: string;
  icon: string;
  iconColor: string;
  message: string;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private authServcie: AuthService,
    private router: Router) { }
  isLoading = false;
  error: string;
  isSignUp = false;
  user: User
  alerts: alerts[] = [
    {
      border: "alert-border-danger",
      background: "alert-danger",
      color: "alert-text-danger",
      icon: "alert-circle",
      iconColor: "text-danger",
      message: "This is an error alert — check it out!",
    }]

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const userName = form.value.userName
    const password = form.value.password
    this.isLoading = true
    
    
    this.authServcie.login(userName, password).subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/home']);
      },
      errorMessage => {
        this.error = errorMessage
        this.isLoading = false;
      }
    )
    form.reset();
  }
  // onSubmitL(loginForm : NgForm) {
  //   const email = loginForm.value.email
  //   const password = loginForm.value.password
  //   console.log(email)
  //   console.log(password)
  //   this.authServcie.login(email ,password).subscribe(res => {
  //     // console.log(res.headers.get('authorization'))
  //     // console.log(res.headers.get('id'))
  //     // console.log(res.headers.get('role'))
  //   } , error => {
  //     this.error=error;
  //   })
  // }
}
