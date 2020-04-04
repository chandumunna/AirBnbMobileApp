import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userIsAuthenticated = true;

  constructor() { }

  login(){
    this.userIsAuthenticated = true;
  }

  logout(){
    this.userIsAuthenticated = false;
  }

  get _userIsAuthenticated(){
    return this.userIsAuthenticated;
  }
}
