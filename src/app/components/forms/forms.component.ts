import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';
import { eventt } from '../event/eventt';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {
  
  checked = true;
  event!:eventt
  constructor(private myservice: EventService) { }

  ngOnInit(): void {
    
  }

  
}
