import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EventService } from 'src/app/Services/event.service';
 

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.scss']
})
export class MychartComponent implements OnInit {
myd!:any[]
labell:any[]=[]
dataa:any[]=[]
  constructor(private services:EventService) { }
 
  ngOnInit(): void {
    this.services.chartt().subscribe(data=>{
      this.myd=data
      for (let index = 0; index < this.myd.length; index++)
       {
        this.labell.push(this.myd[index].name)
        this.dataa.push(this.myd[index].nbr)
  
      }
      this.dataa.push(0)
  
    })
    var myChart = new Chart("canvas", {
      type: 'bar',
      data: {
          labels: this.labell,
          datasets: [{
              label: 'Users by Events',
              data: this.dataa,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }],
          
      },
       
  });
  
  
  }

}
