import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(userName:string, password:string) {
    //console.log('before'+this.isUserLoggedIn())
    if (userName === 'farah' && password === 'farah') {
      sessionStorage.setItem('authenticaterUser',userName)
      //console.log('after'+this.isUserLoggedIn())
      return true;
    }
    return false;
  }


}
