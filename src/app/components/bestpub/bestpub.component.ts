import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ActualityserviceService } from 'src/app/Service/actualityservice.service';
import { Publication } from '../actuality/publication';
import { theme } from '../actuality/theme';

import { pubdto } from '../dashactuality/pubdto';
import { userdto } from '../dashactuality/userdto';
import { worstpubdto } from '../dashactuality/worstpubdto';

@Component({
  selector: 'app-bestpub',
  templateUrl: './bestpub.component.html',
  styleUrls: ['./bestpub.component.scss']
})
export class BestpubComponent implements OnInit {

  pub!: Publication[];

  p : Publication = new Publication();

  values = Object.keys(theme);

  ps! : pubdto[]
  labell:any[]=[]
  dataa:any[]=[]
  u! : userdto[]
  wp!  :worstpubdto[]



  constructor(private myservice : ActualityserviceService,public router: Router, private route :  ActivatedRoute) { }

  ngOnInit(): void {

    this.myservice.bestpub().subscribe(data=>{
      this.ps=data
   console.log(this.ps);
   
     for (let index = 0; index < this.ps.length; index++)
     {
       this.labell.push(this.ps[index].name)
       this.dataa.push(this.ps[index].occ)
    }
 console.log(this.labell);
 console.log(this.dataa);
 
 
  })
  var myChart = new Chart("canvas", {
    type: 'bar',
    data: {
        labels:  this.labell,
        datasets: [{
            label: 'Best Post ',
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
        }]
    },
     
 });
 

  }

}
