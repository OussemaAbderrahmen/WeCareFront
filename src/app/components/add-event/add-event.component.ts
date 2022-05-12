import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { eventt } from '../event/eventt';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  event:eventt= new eventt()
  constructor(private addEventService:EventService, private routerr:Router) { }

  ngOnInit(): void {
  }
  addEvent(){
    this.addEventService.addEvent(this.event).subscribe();
    this.routerr.navigate(['./mydash/myallevents'])

  }

}
