import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  aunthenticate(username: String, password: String): boolean {
    if (username === 'Fluffy' && password === 'lindokuhle') {
      return true;
    }
    return false;
  }
}
