import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


import { AuthRequestService } from './../services/auth_request.services'



@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    user;

    @ViewChild('f', {static: false}) loginForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute,
        public authrequestservice: AuthRequestService
        ) { 
        this.user = {};

    }

    // On submit button click
    onSubmit() {
        console.log('Login CLickeddd');
        console.log('data>>', this.user);


    this.authrequestservice.login(this.user)
    .subscribe(
      (data: any)=>{
         console.log('data',data);
        localStorage.setItem('token',data.token);
        this.router.navigate(['admin/dashboard'])
      },
      error=>{
            console.log('Error>>',error);
      }
    )
    }

    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
