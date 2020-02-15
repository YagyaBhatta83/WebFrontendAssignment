
import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
// import { AuthRequestService } from './services/auth_request.services';
import { User } from './../shared/models/user.model';
import { Router } from '@angular/router';

import { JwtHelperService } from "@auth0/angular-jwt";




@Injectable()
export class AuthService {
  token: string;
  user;

  constructor(public router: Router) {}

  // signupUser(email: string, password: string) {
  //   //your code for signing up the new user
  // }

  // signinUser(email: string, password: string) {
  //   //your code for checking credentials and getting tokens for for signing in user

  //   this.authrequestservice.login(this.user)
  //   .subscribe(
  //     (data: any)=>{
  //       console.log('DATA>>>',data);

  //       localStorage.setItem('token',data.token);
  //       localStorage.setItem('user',JSON.stringify(data.user));
  //       this.router.navigate(['dashboard'])
        
  //     },
  //     error=>{
  //       console.log('Error>>',error);
  //     }
  //   )

  // }

  logout() {   
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  changepassword(){
    this.router.navigate(['/auth/change-password']);
  }


  // getToken() {    

  //  // JwtHelper = new JwtHelperService();
  //   var token = localStorage.getItem('token');
  //   return localStorage.getItem('token')
  // }

  isAuthenticated() {

    var token = localStorage.getItem('token');

    if(token){

      const helper = new JwtHelperService();
      if(!helper.isTokenExpired(token))
      {
        console.log(helper.decodeToken(token))
        console.log('Token available');
        return true;
      }
    }

      console.log('Token unavailable');

           swal.fire(
        'Not Logged In!',
        'session timeout please login again.',
        'error'
      )
      return false;
    

    // here you can check if user is authenticated or not through his token 
    
  }
}
