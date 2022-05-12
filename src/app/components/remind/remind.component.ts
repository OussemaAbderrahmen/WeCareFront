import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { listedt } from './listedt';

@Component({
  selector: 'app-remind',
  templateUrl: './remind.component.html',
  styleUrls: ['./remind.component.scss']
})
export class RemindComponent implements OnInit {
  liste!:listedt[]

  constructor(private myservice: EventService,private routerr:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    this.myservice.listemail().subscribe(data=>
      {
        this.liste=data
        console.log(data);
        
      });
  }
  remind(){
    this.myservice.rappel().subscribe();
  }

}
