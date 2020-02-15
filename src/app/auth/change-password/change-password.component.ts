import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { User } from './../../shared/models/user.model';
import { Location } from '@angular/common';
import { AuthRequestService } from './../services/auth_request.services'

import { Router } from "@angular/router";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

	user;

  constructor(private location: Location,
  	public authrequestservice: AuthRequestService,
  	private router: Router) { 
  	this.user = new User({})
  };

  ngOnInit() {
  }

   cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }


  submit(){

    console.log('this user',this.user);

    this.authrequestservice.changePassword(this.user)
      .subscribe((data) => {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
      }, error => {
      	  console.log('Error>>',error);
        
      });
  }


  }




