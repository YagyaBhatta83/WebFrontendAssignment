import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";

// import { Clients } from './../shared/models/clients.model';

import {ServicesService} from './service_services/services.services';

import { Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

	  services_list:Array<any>;
  	files:[];

    // Table Column Titles
    columns = [
        { name:'Name',prop: 'name' },
        { name: 'Image',prop:'image' }
    ];
    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;



   constructor( public servicesservice:ServicesService, private router:Router) {

   	this.servicesservice.getServices().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.services_list));
 				  console.log("Services>>",data);
           this.services_list = data;

   				

   			}),error=>{
   				console.log("error>>",error);
   			}); 	

        // this.temp = [...data];
        // this.rows = data;
    }


  ngOnInit() {

  }


    serviceDetail(id){
      this.router.navigate(['admin/services/detail/'+id]);  
    }
}
