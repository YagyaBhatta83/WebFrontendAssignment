import { Component, OnInit } from '@angular/core';

// import { Clients } from './../../shared/models/clients.model';

import {ItemsService} from './../services/items.services';

import swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

	item:any
  id;

  constructor( public itemsservice:ItemsService , public activeRouter: ActivatedRoute,
    public router: Router
) {

     this.id = this.activeRouter.snapshot.params['id'];

  }


  ngOnInit() {

    console.log('this id',this.id);
    this.item = {};

    this.itemsservice.getItemsById(this.id).subscribe(((data:any) => {
      this.item = data;


      console.log('Data>>', this.item);


    }),error => {
      console.log('Error>>', error);

    });

  }


  submit(){

        swal.fire({
    title: 'Do you want to update the Item?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Update'
  }).then((result) => {
    if (result.value) {

    this.itemsservice.updateItem(this.item).subscribe((data:any)=>{
      console.log("added successfully");
         swal.fire(
        'Updated!',
        'Item Updated.',
        'success'
      )
         this.ngOnInit();

    },error => {

           swal.fire(
        'Not Updated!',
        'There was some error.',
        'error'
      )
      console.log("Error",error);

          })
   
    }
  })

      console.log("Submitted>>>>>>>>>",this.item);



  }

  DeleteItem(){

        swal.fire({
    title: 'Do you want to delete the Item?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete'
  }).then((result) => {
    if (result.value) {


      //dev
    this.itemsservice.deleteItem(this.item._id).subscribe((data:any)=>{
      console.log("Deleted successfully");
         swal.fire(
        'Deleted!',
        'Item Deleted.',
        'success'
      )
          this.router.navigate(['/admin/items']);
    },error => {

           swal.fire(
        'Not Deleted!',
        'There was some error.',
        'error'
      )
      console.log("Error",error);
    })
   
    }
  })

  }

}




