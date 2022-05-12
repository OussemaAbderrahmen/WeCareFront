import { A } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartType } from 'ng-apexcharts';
import { ActualityserviceService } from 'src/app/Service/actualityservice.service';
import { Publication } from '../actuality/publication';
import { theme } from '../actuality/theme';

import { pubdto } from './pubdto';
import { userdto } from './userdto';
import { worstpubdto } from './worstpubdto';

@Component({
  selector: 'app-dashactuality',
  templateUrl: './dashactuality.component.html',
  styleUrls: ['./dashactuality.component.scss']
})
export class DashactualityComponent implements OnInit {




  term!: any;
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
  page: number = 1;




  
  constructor(private myservice : ActualityserviceService,public router: Router, private route :  ActivatedRoute )
{ 

}

  ngOnInit(): void {

    this.myservice.findAll().subscribe(responce=>{
      this.pub = responce;})

  




  
  

   this.myservice.worstpub().subscribe(data=>{this.wp=data;})

 


   
  
  
  }
 

  

  deletepub(id : number){
    this.myservice.deletepubs(id).subscribe();
    window.location.reload();
    
    }

    
  }


