import { A, B } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { Series } from 'ag-charts-community/dist/cjs/es5/chart/series/series';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';


import {  ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { UserService } from 'src/app/Service/user.service';

export type ChartOptions = {
  series:number[];
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
/*declare var require: any;

const data= require('./data.json');

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent | any;
  series: Chart;

}*/

@Component({
  selector: 'app-userstat',
  templateUrl: './userstat.component.html',
  styleUrls: ['./userstat.component.scss']
})
export class UserstatComponent implements OnInit {
 
@ViewChild("chart") chart: ChartComponent;
public chartOptions: Partial<ChartOptions>| any;
 a:number;
 b:number;
  constructor(public userService: UserService) {}
ngOnInit(): void {
  
    this.userService.blocked().subscribe(
      response => {
        console.log(response);
        this.b=response;
        console.log(this.b);
        this.chartOptions = {
          series: [this.a,this.b],
          chart: { width: 380,type: "pie"},
          labels: ["Blocked User", "Unblocked User"],
          responsive: [
            {breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
      },
    );
    this.userService.unblocked().subscribe(
      data => {
        console.log(data);
        this.a =data;
        console.log(this.a);
        this.chartOptions = {
          series: [this.a,this.b],
          chart: { width: 380,type: "pie"},
          labels: ["Blocked User", "Unblocked User"],
          responsive: [
            {breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
      }
    ); 
  }

}
  /*donuteChart1: Chart = {
		type: 'Pie',
		data: data['Pie'],
		options: {
			donut: true,
			height: 260,
			showLabel: false,
			donutWidth: 20,
      
		},
    
    
    
	};*/
