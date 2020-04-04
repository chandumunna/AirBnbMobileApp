import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthServiceService,
              private router: Router){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
     if( !this.authService._userIsAuthenticated){
       this.router.navigateByUrl('/auth');
     }else{
       return this.authService._userIsAuthenticated;
     }
  }


}
