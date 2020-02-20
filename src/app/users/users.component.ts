import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";

// import { Clients } from './../shared/models/clients.model';

import {UsersService} from './services/users.services';

import { Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	  users_list:Array<any>;
  


   constructor( public usersservice:UsersService, private router:Router) {

   	this.usersservice.getUsers().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.users_list));
 				  console.log("Users>>",data);
           this.users_list = data;

   			}),error=>{
   				console.log("error>>",error);
   			}); 	

        // this.temp = [...data];
        // this.rows = data;
    }


  ngOnInit() {

  }


    userDetail(id){
      this.router.navigate(['admin/users/detail/'+id]);  
    }
}
