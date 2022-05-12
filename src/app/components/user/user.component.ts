import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { Donation } from '../cagnottes/cagnottes.component';

export type ChartOptions = {
  series: number[];
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE'
}
export class User {
  constructor(
    public userId: number,
    public role: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public nbPoints: number,
    public password: string,
    public userName: string,
    public birthDate: Date,
    public active: boolean,
    public locked: boolean,
    public deleted: boolean,
    public image: string,
    public warningNum: number,
    public SendWarningDate: Date,
    public nbconnexion: number,
    public donations:Donation[]) { }
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  userList: User[] = [];
  p:number=1;

  
  isAdmin=true;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  a: number;
  b: number;
  constructor(public userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'))


    if(userData.role==="ADMIN"){
      this.userService.getAllUsers().subscribe(
      response => {
        console.log(response);
        this.userList = response;
      }, error =>{
        console.log(error)
      })
    }else{
          this.isAdmin=false;
          this.router.navigate(['error'])
    } ;
    this.userService.blocked().subscribe(
      response => {
        console.log(response);
        this.b = response;
        console.log(this.b);
        this.chartOptions = {
          series: [this.a, this.b],
          chart: { width: 380, type: "pie" },
          labels: ["Blocked User", "Unblocked User"],
          responsive: [
            {
              breakpoint: 480,
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
        this.a = data;
        console.log(this.a);
        this.chartOptions = {
          series: [this.a, this.b],
          chart: { width: 380, type: "pie" },
          labels: ["Blocked User", "Unblocked User"],
          responsive: [
            {
              breakpoint: 480,
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

  message = "";
  deleteUser(id: number) {
    console.log(`delete user ${id}`);
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log(response);
        this.message = `  user ${id} deleted successfully `;
        this.userService.getAllUsers().subscribe(
          response => {
            console.log(response);
            this.userList = response;
          });
      })
  }

  updateUser(id: number) {
    
    this.router.navigate(['userupdate', id])
  }
  addUser() {
    this.router.navigate(['adduser'])
  }
  statUser() {
    this.router.navigate(['userstat'])
  }
  getuserbyid(id: number) {
    this.router.navigate(['retrieveuser', id])
  }
}
