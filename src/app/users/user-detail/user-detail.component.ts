import { Component, OnInit } from '@angular/core';

// import { Clients } from './../../shared/models/clients.model';

import {UsersService} from './../services/users.services';

import swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

	user:any
  id;

  constructor( public usersservice:UsersService , public activeRouter: ActivatedRoute,
    public router: Router
) {

     this.id = this.activeRouter.snapshot.params['id'];

  }


  ngOnInit() {

    console.log('this id',this.id);
    this.user = {};

    this.usersservice.getUsersById(this.id).subscribe(((data:any) => {
      this.user = data;


      console.log('Data>>', this.user);


    }),error => {
      console.log('Error>>', error);

    });

  }


  submit(){

        swal.fire({
    title: 'Do you want to update the User?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Update'
  }).then((result) => {
    if (result.value) {

    this.usersservice.updateUser(this.user).subscribe((data:any)=>{
      console.log("added successfully");
         swal.fire(
        'Updated!',
        'User Updated.',
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

      console.log("Submitted>>>>>>>>>",this.user);



  }

  DeleteUser(){

        swal.fire({
    title: 'Do you want to delete the User?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete'
  }).then((result) => {
    if (result.value) {


      //dev
    this.usersservice.deleteUser(this.user._id).subscribe((data:any)=>{
      console.log("Deleted successfully");
         swal.fire(
        'Deleted!',
        'User Deleted.',
        'success'
      )
          this.router.navigate(['/admin/users']);
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




