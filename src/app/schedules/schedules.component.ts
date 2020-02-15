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
  	rows:any = [];
    temp = [];


    // Table Column Titles
    columns = [
    
        { name:'Status',prop: 'status' },
        { name:'Date',prop: 'date' },
        { name: 'time',prop:'time' },
        { name: 'Location',prop:'location' },
        { name: 'user',prop:'user' }


    ];
    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;



   constructor( public schedulesservice:SchedulesService, private router:Router) {

   	this.schedulesservice.getSchedules().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.schedules_list));
 				  console.log("Schedules>>",data);
           this.schedules_list = data;

   				this.temp = [...this.schedules_list];
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

    scheduleDetail(id){
      this.router.navigate(['admin/schedules/detail/'+id]);  
    }
}
