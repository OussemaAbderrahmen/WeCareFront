import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Service/notification.service';



export class Notif {
    constructor(
    public notificationId:number,
    public titleNotification:string,
    public DateDeNotification:Date,
    public description:string,
    public userNotif:string,
    public etat:boolean
  ){ }
  }
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  displayedColumns: string[] = ['notificationId' ,  'titleNotification' ,'action'];

  notificationList : Notif[] = [];
 
  
 
  constructor(public notificationService: NotificationService,
    public router : Router) { }


  
    ngOnInit(): void {
     this.notificationService.getAllNotifications().subscribe(
       response=>{
         console.log(response);
         this.notificationList=response;

       }
     );
   
      }
    
  
    
  
    message="";
    deleteNotification(id: number){
      console.log(`delete notification ${id}`);
      this.notificationService.deleteNotification(id).subscribe(
        response=>{
          console.log(response);
          this.message =  `notification ${id} deleted successfully`  ;
         this.notificationService.getAllNotifications().subscribe(
            response => {
              console.log(response);
            this.notificationList=response;
           });   
       })
    }
  
    updateNotification(id:number){
      console.log(`update ${id}`)
      this.router.navigate(['updateNotification',id])
    }
  
   addNotification(){
     this.router.navigate(['addNotification'])
   
  }
  statNotification(){
    this.router.navigate(['notstat'])
  }

}