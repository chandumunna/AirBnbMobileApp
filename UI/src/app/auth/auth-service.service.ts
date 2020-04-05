import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userIsAuthenticated = true;
  private userId ="user1";

  constructor() { }

  login(){
    this.userIsAuthenticated = true;
  }

  logout(){
    this.userIsAuthenticated = false;
  }

  get _userId(){
    return this.userId;
  }

  get _userIsAuthenticated(){
    return this.userIsAuthenticated;
  }
}
