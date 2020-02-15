import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthRequestService } from './../services/auth_request.services'

import { User } from './../../shared/models/user.model';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
    @ViewChild('f', {static: false}) forogtPasswordForm: NgForm;

    user;

    constructor(private router: Router,
        private route: ActivatedRoute,
        public authrequestservice: AuthRequestService) { 

        this.user = new User({});

    }

    // On submit click, reset form fields
    submit() {

        console.log('User>>>',this.user);


    this.authrequestservice.forgotPassword(this.user)
      .subscribe((data) => {
        this.router.navigate(['/auth/login']);
      }, error => {
            console.log('Error>>',error);
        
      });
  }




    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
