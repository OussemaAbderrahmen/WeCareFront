import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/Service/notification.service';
import { Notif } from '../notification.component';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {

  checked = true ;
  id!: number;

  notification!: Notif;
  constructor(
    private _router: Router,
    public notificationService: NotificationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.notification = new Notif (this.id ,'' ,new Date() , '' , '' , false);

  }

  addNotification(){
    this.notificationService.addNotification(this.notification)
      .subscribe(
        data => {
          console.log(data)
          this._router.navigate(['notification'])
        }
      )
  }

}
