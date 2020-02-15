import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";

// import { Clients } from './../shared/models/clients.model';

import {ItemsService} from './services/items.services';

import { Router} from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

	  items_list:Array<any>;
  	rows:any = [];
    temp = [];

    // Table Column Titles
    columns = [
        { name:'Name',prop: 'name' },
        { name:'Price',prop: 'price' },
        { name: 'Image',prop:'image' }
    ];
    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;



   constructor( public itemsservice:ItemsService, private router:Router) {

   	this.itemsservice.getItems().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.items_list));
 				  console.log("Items>>",data);
           this.items_list = data;

   				this.temp = [...this.items_list];
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

    itemDetail(id){
      this.router.navigate(['admin/items/detail/'+id]);  
    }
}
