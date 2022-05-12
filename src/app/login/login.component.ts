import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/user/user.component';
import { HardcodedAuthenticationService } from '../Service/hardcoded-authentication.service';
import { LoginService } from '../Service/login.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

 
  errorMessage='invalid'
  invalidLogin=false
  userName =''
  password=''
  

  constructor(private router : Router,
    private hardcodedAuthentication : HardcodedAuthenticationService,
    private loginservice:LoginService) {

   }

  ngOnInit(): void {
  
  }
 handleLogin(){
   //console.log(this.userName)
   //console.log(this.password)
  
   //if(this.userName==='farah' && this.password==='farah'){
    if(this.loginservice.authenticate(this.userName,this.password)){
     this.router.navigate(['home',this.userName])
     this.invalidLogin=false
   }
   else{
     this.invalidLogin=true
   }
  }
 handleLogin2(){
    this.loginservice.authenticate(this.userName,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['home'])
        }
      )
  }
 

 
}
