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
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.scss']
})
export class ActiveuserComponent implements OnInit {

  pub!: Publication[];

  p : Publication = new Publication();

  values = Object.keys(theme);

  ps! : pubdto[]
  labell:any[]=[]
  dataa:any[]=[]
  label1:any[]=[]
  data1:any[]=[]
  u! : userdto[]
  wp!  :worstpubdto[]




  constructor(private myservice : ActualityserviceService,public router: Router, private route :  ActivatedRoute ) { }

  ngOnInit(): void {

    this.myservice.activeuser().subscribe(data=>{
      this.u=data;
      console.log(this.u);
          for (let index = 0; index < this.u.length; index++)
      {
        this.label1.push(this.u[index].name)
  
        this.data1.push(this.u[index].occ)
     }
  console.log(this.label1);
  console.log(this.data1); 
    })

    var myChart = new Chart("canvas", {
      type: 'doughnut',
      data: {
          labels:  this.label1,
          datasets: [{
              label: 'Best Post ',
              data: this.data1,
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
