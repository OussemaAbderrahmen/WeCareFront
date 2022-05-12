import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydash',
  templateUrl: './mydash.component.html',
  styleUrls: ['./mydash.component.scss']
})
export class MydashComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  takemetoEvent()
  {
    this.route.navigate(['./mydash/myallevents'])
  }
  takemetoadd()
  {
    this.route.navigate(['./mydash/add'])
  }
  takemetobest()
  {
    this.route.navigate(['./mydash/best'])
  }
  takemetostas()
  {
    this.route.navigate(['./mydash/adstat'])
  }
  takemetoremind()
  {
    this.route.navigate(['./mydash/remind'])
  }
}
