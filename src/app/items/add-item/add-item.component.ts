import { Component, OnInit } from '@angular/core';

// import { Clients } from './../../shared/models/clients.model';

import {ItemsService} from './../services/items.services';

import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  newitem:any;
  files:[];

  constructor(public itemsservice:ItemsService,  public router: Router ) { 
  	this.newitem = {};
  }

  ngOnInit() {
  }

  submit(){
    console.log("Submitted>>>>>>>>>",this.newitem);

    this.itemsservice.addItem(this.newitem,this.files).subscribe((data:any)=>{
      console.log("added successfully");
         swal.fire(
        'Added!',
        'Item Added.',
        'success'
      )

       this.router.navigate(['/admin/items']);


    },error => {

           swal.fire(
        'Not Added!',
        'There was some error.',
        'error'
      )
      console.log("Error",error);
    })
  }


  fileChanged(ev){
    this.files = ev.target.files;
  }

}
