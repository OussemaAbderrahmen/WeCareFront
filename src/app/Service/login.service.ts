import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  authenticate(userName: string, password: string) {
    return this.http.post('http://localhost:8089/wecare/user/login', {
      userName: userName,
      password: password
    }, {
      observe: 'response'
    }).pipe(tap(resData => { console.log(resData.headers.get('authorization')) }))
  }
}
