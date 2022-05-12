import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/user/user.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getAllUsers(){
    console
    return this.http.get<User[]>('http://localhost:8089/wecare/user/get-all-users')
  }
  deleteUser(id:number){
    return this.http.delete(`http://localhost:8089/wecare/user/delete-user/${id}`)
  }
  retrieveUser(id:number){
    return this.http.get<User>(`http://localhost:8089/wecare/user/get-user-by-id/${id}`)
  }

  updateUse(id:number,u:User){
    return this.http.put(`http://localhost:8089/wecare/user/update-user/${id}`,u);

  }
  addUser(u:User){
    return this.http.post(`http://localhost:8089/wecare/user/add-user`,u);

  }
  blocked(){
    return this.http.get<any>(`http://localhost:8089/wecare/user/blocked`);

  }
  unblocked(){
    return this.http.get<number>(`http://localhost:8089/wecare/user/unblocked`);

  }
}
