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
  	rows:any = [];
    temp = [];


    // Table Column Titles
    columns = [
    
        { name:'Full Name',prop: 'fullName' },
        { name:'Username',prop: 'username' },
        { name: 'phonenumber',prop:'phoneNumber' },
        { name: 'Location',prop:'location' },
        { name: 'Image',prop:'image' },
        { name: 'Admin',prop:'admin' }


    ];
    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;



   constructor( public usersservice:UsersService, private router:Router) {

   	this.usersservice.getUsers().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.users_list));
 				  console.log("Users>>",data);
           this.users_list = data;

   				this.temp = [...this.users_list];
          // push our inital complete list
			      this.rows = data;

   			}),error=>{
   				console.log("error>>",error);
   			}); 	

        // this.temp = [...data];
        // this.rows = data;
    }


  ngOnInit() {

  }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return (d.f_name.toLowerCase().indexOf(val) !== -1 || d.org_name.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val);
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    userDetail(id){
      this.router.navigate(['admin/users/detail/'+id]);  
    }
}
