import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-best-user',
  templateUrl: './best-user.component.html',
  styleUrls: ['./best-user.component.scss']
})
export class BestUserComponent implements OnInit {
ob:any=""
  constructor( private myservice:EventService) { }

  ngOnInit(): void {
    this.myservice.BestUser().subscribe(data=>{
      this.ob=data 
      console.log(this.ob);
      
    })
  }

}
