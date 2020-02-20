import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";

// import { Clients } from './../shared/models/clients.model';

import {SchedulesService} from './services/schedules.services';

import { Router} from "@angular/router";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

	  schedules_list:Array<any>;


   constructor( public schedulesservice:SchedulesService, private router:Router) {

   	this.schedulesservice.getSchedules().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.schedules_list));
 				  console.log("Schedules>>",data);
           this.schedules_list = data;

   
   			}),error=>{
   				console.log("error>>",error);
   			}); 	

        // this.temp = [...data];
        // this.rows = data;
    }


  ngOnInit() {

  }
 scheduleDetail(id){
      this.router.navigate(['admin/schedules/detail/'+id]);  
    }
}
