import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Role, User } from '../user.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  primaryMode:any;
  modesLabels=[
    Role.ADMIN,
    Role.EMPLOYEE
  ];
  //checked :true;
  myForm: FormGroup;
  id!: number;
  user!: User;
 
  constructor(
    private _router: Router,
    public userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    
  }
  ngOnInit(): void {
    this.user = new User(this.id, '','', '', '', 0, '', '', new Date(), false, false, false, '', 0,new Date,0,[]);


  }
 

  addUser(){
    this.userService.addUser(this.user)
      .subscribe(
        data => {
          console.log(data)
          this._router.navigate(['user'])
        }
      )
  }
  primaryModeChangeHandler(event:any) {
    console.log(this.primaryMode);    
  }

}
