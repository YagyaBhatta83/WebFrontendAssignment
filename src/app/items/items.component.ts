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
  	

    


   constructor( public itemsservice:ItemsService, private router:Router) {

   	this.itemsservice.getItems().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.items_list));
 				  console.log("Items>>",data);
           this.items_list = data;

   	
   			}),error=>{
   				console.log("error>>",error);
   			}); 	

    }


  ngOnInit() {

  }
    itemDetail(id){
      this.router.navigate(['admin/items/detail/'+id]);  
    }
}
