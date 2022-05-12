import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';
import { User } from '../complaints/complaints.component';

@Component({
  selector: 'app-most-complainer',
  templateUrl: './most-complainer.component.html',
  styleUrls: ['./most-complainer.component.scss']
})
export class MostComplainerComponent implements OnInit {

  mostComplain: any[];
  users: User[] = [];
  user: User;
  constructor( public complaintService: ComplaintService,
    public router: Router) { }

  ngOnInit(): void {
    this.complaintService.retrieveMostComplainer().subscribe((response) => {
      console.log(response);
      this.mostComplain = response;
    });

    this.complaintService.retrieveUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
    this.complaintService.retrieveMostComplainer().subscribe((response) => {
      console.log(response);
      this.user = response;
    });
  }

}
