import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Role, User } from '../user.component';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {
  primaryMode:any;
  modesLabels=[
    Role.ADMIN,
    Role.EMPLOYEE
  ];
  //checked = true;
  id!: number;
  user!: User;

  constructor(
    private _router: Router,
    public userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User(this.id,'' ,'', '', '', 0, '', '', new Date(), false, false, false, '', 0, new Date(), 0,[]);
    if (this.id != -1) {
      this.userService.retrieveUser(this.id)
        .subscribe(
          data => this.user = data
        )
    }
  }

  updateUser() {
    //update user
    this.userService.updateUse(this.id, this.user)
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







