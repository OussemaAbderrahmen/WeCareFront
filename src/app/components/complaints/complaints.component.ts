import { Component, Injectable ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';

export  class Complaints{
  constructor(){}

  public complaintId: number = 0;
  public complaintDate: Date =  new Date() ;
  public complaintImage: string ='';
  public complaintDescription: string ='';
  public status: boolean = false;
  public complaintType: string ='';

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
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  listComplaints : Complaints[] =[];
  constructor( public complaintService :ComplaintService,
    public router : Router

  ) { 
 
  }

  ngOnInit(): void {
    this.complaintService.retrieveAllComplaints().subscribe(
      response =>{
        console.log(response);
        this.listComplaints=response;
      }
    )
  }
message ="";
   deleteComplaint(id:number){

    console.log(`delete complaint ${id}`);
    this.complaintService.deleteComplaint(id).subscribe(
        response=>{
          console.log(response);
          this.message =   `complaint ${id} deleted successfully` ;
         this.complaintService.retrieveAllComplaints().subscribe(
            response => {
              console.log(response);
            this.listComplaints=response;
           }
         );
          
       })}
       btnClick=  () => {
        this.router.navigateByUrl('/add-complaint');
};


      
  

}
