import { Component, Injectable, Input, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { tree } from "d3";
import { Subject } from "rxjs";
import { PeriodicElement } from "src/app/dashboard/dashboard-components/product/product.component";
import { ComplaintService } from "src/app/Service/complaint.service";
export class User {
  constructor(
    public userId: number,
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
    public nbconnexion: number,
    public SendWarningDate: Date
  ) {}
}
export class Complaints {
  constructor() {}

  public complaintId: number = 0;
  public complaintDate: Date = new Date();
  public complaintImage: string = "";
  public complaintDescription: string = "";
  public status: boolean = false;
  public complaintType: string = "";

  /*      constructor( 
       public complaintId : number,
        public complaintDate : Date,
        public complaintImage : string,
        public complaintDescription : string,
        public status : boolean,
        public  complaintType : string) 
        {}  */
}
@Component({
  selector: "app-complaints",
  templateUrl: "./complaints.component.html",
  styleUrls: ["./complaints.component.scss"],
})
export class ComplaintsComponent implements OnInit {
  @Input("pagination") pagination!: boolean;
  listComplaints: Complaints[] = [];
  mostComplain: any[];
  users: User[] = [];
  display = false;

  user: User;
  dtTrigger: Subject<any> = new Subject<any>();

  dtOptions: DataTables.Settings = {};
  p: number = 1;
  searchValue: any;
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  /*   dataSource: MatTableDataSource<Complaints> = new MatTableDataSource();
   */
  /* @ViewChild(MatPaginator) */
  dataSource = new MatTableDataSource<Complaints>();

  onPress = () => {
    this.display = true;
  };
  constructor(
    public complaintService: ComplaintService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.complaintService.retrieveAllComplaints().subscribe((response) => {
      console.log(response);
      this.listComplaints = response;
      /*         this.dtTrigger.next();
       */
      this.dtTrigger["new"] = new Subject<any>();
      this.dtOptions["new"] = {};
    });
    this.complaintService.retrieveMostComplainer().subscribe((response) => {
      console.log(response);
      this.mostComplain = response;
    });

    this.complaintService.retrieveMostComplainer().subscribe((response) => {
      console.log(response);
      this.user = response;
    });
    this.complaintService.retrieveUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
    this.dtOptions = {
      pagingType: "full_numbers",
    };
  }

  message = "";
  deleteComplaint(id: number) {
    console.log(`delete complaint ${id}`);
    this.complaintService.deleteComplaint(id).subscribe((response) => {
      console.log(response);
      this.message = `complaint ${id} deleted successfully`;
      this.complaintService.retrieveAllComplaints().subscribe((response) => {
        console.log(response);
        this.listComplaints = response;
      });
    });
  }
  btnClick = () => {
    this.router.navigateByUrl("/add-complaint");
  };
  btnPie = () => {
    this.router.navigateByUrl("/pie-chart");
  };
  socialMedia = () => {
    this.router.navigateByUrl("/social-media");
  };
}
