import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../Services/event.service';


@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.scss']
})
export class DetailsEventComponent implements OnInit {

  id!: any
  event:any
  constructor(private myservice: EventService,private routerr:Router, private actr:ActivatedRoute) { }

  ngOnInit(): void {  
   this.id=this.actr.snapshot.params['id'];
    this.eventDetails(this.id);
  } 
  eventDetails(id:any){
    this.myservice.getEventbyId(id).subscribe(data=>{this.event=data})
      console.log(this.event)}
     
      goback(){
        this.routerr.navigateByUrl('/event')
      }
  
}
