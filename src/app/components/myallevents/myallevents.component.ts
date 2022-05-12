import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { eventt } from '../event/eventt';
import { eventtnote } from '../event/eventtnote';

@Component({
  selector: 'app-myallevents',
  templateUrl: './myallevents.component.html',
  styleUrls: ['./myallevents.component.scss']
})
export class MyalleventsComponent implements OnInit {

  et!: eventt[]
  evnt:eventt=new eventt()
  id:any
  ev!: eventtnote
  displayStyle = "none";
  displayStylee = "none";
  event:eventt= new eventt()
  
 
  constructor( private myservice: EventService,private routerr:ActivatedRoute, private rout:Router ) { }

  ngOnInit(): void {
    this.myservice.findAll().subscribe(data=>{this.et=data;}
      
      
      
      )
    
    }
    
  
    

    delete(id:number){
      this.myservice.delete(id).subscribe();
      window.location.reload()
    } 
   getNavigation(id:number){
    this.displayStyle = "block";
   }
  modifier(id:number){
    this.rout.navigateByUrl('/update-event'+'/'+id)
    this.myservice.getId(id);
  }

 
  highestnote(){
    
    this.rout.navigateByUrl('/stat-event')
  }
    
  
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  openPopup2() {
    this.displayStylee = "block";
  }
  closePopup2() {
    this.displayStylee = "none";
  }
  eventDetails(id:any){
    this.myservice.getEventbyId(id).subscribe(data=>{this.event=data})
      console.log(this.event)}

      updateevent(){
        this.myservice.updateEvent(this.event.eventId,this.event).subscribe()
       
         console.log(this.event)
        }
        getbyid(idd:any){
          this.myservice.getEventbyId(idd).subscribe(data=>{this.event=data})
          idd=this.routerr.snapshot.params['id']
          
        }
      

}
