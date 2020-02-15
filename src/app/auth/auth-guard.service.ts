import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  	  if (this.authService.isAuthenticated()) {
      		return true;
    	}
    
    // // navigate to login page
    this.router.navigate(['/auth/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

  
}
