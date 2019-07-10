import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    console.log(localStorage.getItem('token'));
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 
}
