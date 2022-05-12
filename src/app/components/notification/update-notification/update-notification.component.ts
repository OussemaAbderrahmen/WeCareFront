import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from 'src/app/Service/notification.service';
import { Notif } from '../notification.component';

@Component({
  selector: 'app-update-notification',
  templateUrl: './update-notification.component.html',
  styleUrls: ['./update-notification.component.scss']
})
export class UpdateNotificationComponent implements OnInit {

  checked = true;
  id!: number;

  notification!: Notif;
  constructor(
    public router: Router,
    public notificationService: NotificationService,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.notification = new Notif (this.id ,'' ,new Date() , '' , '' , false);
    if (this.id != -1) {
      this.notificationService.retrieveNotification(this.id)
        .subscribe(
          data => this.notification = data
        )
    }
  }
  updateNotification() {
    //update user
    this.notificationService.updateNotification(this.id, this.notification)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['notification'])
        }
      )
  }

}
