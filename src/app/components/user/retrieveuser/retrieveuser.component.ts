import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { User } from '../user.component';

@Component({
  selector: 'app-retrieveuser',
  templateUrl: './retrieveuser.component.html',
  styleUrls: ['./retrieveuser.component.scss']
})
export class RetrieveuserComponent implements OnInit {
  id!: number;
  id2!: number;
  user!: User;
  constructor(public userservice:UserService,public route:ActivatedRoute,public _router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.user = new User(this.id,'' ,'', '', '', 0, '', '', new Date(), false, false, false, '', 0, new Date(), 0,[]);
    if (this.id != -1) {
    
      this.userservice.retrieveUser(this.id)
        .subscribe(
          data => this.user = data
        )
    }
  }
  updateUser(id:number){
    console.log(`update ${id}`)
    this._router.navigate(['userupdate',id])
  }
  listUser(){
    this._router.navigate(['user'])
  }

}
