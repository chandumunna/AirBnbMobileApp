import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userIsAuthenticated = false;

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
