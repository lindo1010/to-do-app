import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  aunthenticate(username: any, password: String): boolean {
    if (username === 'Fluffy' && password === 'lindokuhle') {
      //store session storage
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}
