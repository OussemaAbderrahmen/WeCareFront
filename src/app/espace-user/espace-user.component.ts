import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../Services/event.service';
import { espaceDt } from './espaceDt';

@Component({
  selector: 'app-espace-user',
  templateUrl: './espace-user.component.html',
  styleUrls: ['./espace-user.component.scss']
})
export class EspaceUserComponent implements OnInit {
  id:any
  event!:espaceDt[]
nbr:any
  constructor(private myservice: EventService,private routerr:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    this.myservice.eventuser(2).subscribe(data=>{this.event=data;
      console.log(this.event)})
     }
    

    noter( idev:number, iduser:number){

      console.log(idev);
      console.log(iduser);
      this.myservice.NoterEvent(this.nbr,idev,iduser).subscribe(data=>{
        console.log(data);
        this.nbr=""
        this.myservice.eventuser(2).subscribe(data=>{this.event=data;
          console.log(this.event)})
      });}
      
      displayStyle = "none";
  
      openPopup() {
        this.displayStyle = "block";
      }
      closePopup() {
        this.displayStyle = "none";
      }
      
      
      
  }


