import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";

import { Transactions } from './../shared/models/transactions.model';

import {TransactionsService} from './services/transactions.services';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

	transactions_list:Array<Transactions>;
  	rows:any = [];
    temp = [];

    // Table Column Titles
    columns = [
        { name:'CLient',prop: 'client_id.f_name' },
        { name:'',prop: 'client_id.l_name' },
        { name:'State',prop: 'state' },
        { name:'Service',prop: 'service.name' }
    ];
    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;

   constructor( public transactionsservice:TransactionsService) {

   	this.transactionsservice.getTransactions().subscribe(
   			((data:any) =>{
       //     dev
       //     console.log(typeof(this.clients_list));
 				  console.log("Transactionss>>",data);
           this.transactions_list = data;

   				this.temp = [...this.transactions_list];
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
            return (d.state.toLowerCase().indexOf(val) !== -1 );
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }


}
