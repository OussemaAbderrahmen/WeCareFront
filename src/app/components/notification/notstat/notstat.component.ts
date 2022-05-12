import { Component, OnInit } from '@angular/core';

import {  ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { NotificationService } from 'src/app/Service/notification.service';

export type ChartOptions = {
  series:number[];
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-notstat',
  templateUrl: './notstat.component.html',
  styleUrls: ['./notstat.component.scss']
})
export class NotstatComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
public chartOptions: Partial<ChartOptions>;
a:number;
 b:number;
  constructor(public notificationService:NotificationService) { }

  ngOnInit(): void {
    this.notificationService.Lue().subscribe(
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
    this.notificationService.NonLue().subscribe(
      data => {
        console.log(data);
        this.a =data;
        console.log(this.a);
        this.chartOptions = {
          series: [this.a,this.b],
          chart: { width: 380,type: "pie"},
          labels: ["Lue", "NonLue"],
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
