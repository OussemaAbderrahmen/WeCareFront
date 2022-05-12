import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { eventtnote } from '../event/eventtnote';
import { nbr } from './nbr';
import { rentable } from './rentable';
import { type } from './type';
import { userdt } from './userdt';

@Component({
  selector: 'app-statadmin',
  templateUrl: './statadmin.component.html',
  styleUrls: ['./statadmin.component.scss']
})
export class StatadminComponent implements OnInit {
  ev!: eventtnote
  user!: userdt
  nbre!:nbr
  id!:number
  myid!:number
  evr!:rentable
  typeev!:type
  idt:any=""
  constructor(private myservice: EventService,private routerr:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void 
  {this.myservice.notesuperieur().subscribe(data=>{this.ev=data;})
  console.log(this.ev);
  this.myservice.userdeEvent().subscribe(data=>{this.user=data;})
  this.myservice.EventRentable().subscribe(data=>{this.evr=data;})
  console.log(this.evr)
 
  }
 //notesup(){
  //this.myservice.notesuperieur().subscribe(data=>{this.ev=data;})
    //console.log(this.ev);}

 //userdelevent(){
   //this.myservice.userdeEvent().subscribe(data=>{this.user=data;})}
  
   profitnetevent(id:number){
     
     this.myservice.profitnet(this.myid).subscribe(data=>{this.nbre=data;})
      console.log(this.nbre)}

    deletenote(){
    this.myservice.deletebynote().subscribe();
     window.location.reload()
      }
    //rentable(){
      //this.myservice.EventRentable().subscribe(data=>{this.evr=data;})
      //console.log(this.evr);}
    typeleplusparticipe(id:number){
      this.myservice.TypeParticipe(this.idt).subscribe(data=>{this.typeev=data;})

    }

}
