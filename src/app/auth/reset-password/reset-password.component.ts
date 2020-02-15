import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AuthRequestService } from './../services/auth_request.services'


import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './../change-password/change-password.component.html',
  styleUrls: ['./../change-password/change-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

	user;
	token;

	 
  public constructor(private route:ActivatedRoute, private router:Router,public authrequestservice: AuthRequestService) {
  	this.user = new User({});
  	this.token = this.route.snapshot.params['token'];

  }

  ngOnInit() {
  }

  submit(){
    this.user.token = this.token
  	console.log('User', this.user);


    this.authrequestservice.resetPassword(this.user)
      .subscribe((data) => {
        this.router.navigate(['/auth/login']);
      }, error => {
          console.log('Error>>',error);
        
      });



  
  }

   cancel() {
        this.router.navigate(['/auth/login']);
  }


}
