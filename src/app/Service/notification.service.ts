import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notif } from '../components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

   constructor(private http:HttpClient) { }

  getAllNotifications(){
    return this.http.get<Notif[]>('http://localhost:8089/wecare/notification/get-all-notification')
  }
  deleteNotification(id:number){
    return this.http.delete(`http://localhost:8089/wecare/notification/delete-notification/${id}`)
  }
  retrieveNotification(id:number){
    return this.http.get<Notif>(`http://localhost:8089/wecare/notification/get-notification-by-id/${id}`)
  }
  updateNotification(id:number,n:Notif){
    return this.http.put(`http://localhost:8089/wecare/notification/update-notification/${id}`,n);

  }
  addNotification(n:Notif){
    return this.http.post(`http://localhost:8089/wecare/notification/add-notification/`,n);

  }
  Lue(){
    return this.http.get<any>(`http://localhost:8089/wecare/notification/Lue`);
}
NonLue(){
  return this.http.get<any>(`http://localhost:8089/wecare/notification/nonLue`);
}

}