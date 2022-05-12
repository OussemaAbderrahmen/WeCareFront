import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { eventt } from './eventt';
import { ActivatedRoute } from '@angular/router';
import { eventtnote } from './eventtnote';
import { espaceDt } from 'src/app/espace-user/espaceDt';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

interface cards {
  image: string;
  btn: string;
}
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  et!: eventt[]
  evnt:eventt=new eventt()
  id:any
  event:any
  testing!:espaceDt[]
  p: number = 1;
  
 
  constructor( private myservice: EventService,private routerr:ActivatedRoute, private rout:Router ) { }

  ngOnInit(): void {
    this.myservice.findAll().subscribe(data=>{this.et=data;
      console.log(this.et);
      
      this.myservice.eventuser(1).subscribe(t=>{

        
        
        //for (let index = 0; index < this.et.length; index++)
        //{
          //      for (let r = 0; r < this.testing.length; r++)
            //    {
  
                
              //   {
          
           //console.log(this.testing.values);
           
             //  } 
               // }
      //}
      })
     
    
    })
    this.id=this.routerr.snapshot.params['id'];
    this.eventDetails(this.id);
    



    }
    cards: cards [] = [
      {
        image: "assets/images/u2.webp",
        btn: "btn-danger",
      },
     
    ]
   getNavigation(id:number){
    this.rout.navigateByUrl('/details-event'+'/'+id)}
    
    Accepter(idev:number, iduser:number){
      this.myservice.AccepterEvent(idev,iduser).subscribe();
    }

    displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  eventDetails(id:any){
    this.myservice.getEventbyId(id).subscribe(data=>{this.event=data})
      console.log(this.event)}

    }
   

 
 
  
    



