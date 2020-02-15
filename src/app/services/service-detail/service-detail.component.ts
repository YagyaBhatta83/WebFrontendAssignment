import { Component, OnInit } from '@angular/core';

// import { Clients } from './../../shared/models/clients.model';

import {ServicesService} from './../service_services/services.services';

import swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

	service:any
  id;

  constructor( public servicesservice:ServicesService , public activeRouter: ActivatedRoute,
    public router: Router
) {

     this.id = this.activeRouter.snapshot.params['id'];

  }


  ngOnInit() {

    console.log('this id',this.id);
    this.service = {};

    this.servicesservice.getServicesById(this.id).subscribe(((data:any) => {
      this.service = data;


      console.log('Data>>', this.service);


    }),error => {
      console.log('Error>>', error);

    });

  }


  submit(){

        swal.fire({
    title: 'Do you want to update the Service?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Update'
  }).then((result) => {
    if (result.value) {

    this.servicesservice.updateService(this.service).subscribe((data:any)=>{
      console.log("added successfully");
         swal.fire(
        'Updated!',
        'Service Updated.',
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

      console.log("Submitted>>>>>>>>>",this.service);



  }

  DeleteService(){

        swal.fire({
    title: 'Do you want to delete the Service?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete'
  }).then((result) => {
    if (result.value) {


      //dev
    this.servicesservice.deleteService(this.service._id).subscribe((data:any)=>{
      console.log("Deleted successfully");
         swal.fire(
        'Deleted!',
        'Service Deleted.',
        'success'
      )
          this.router.navigate(['/admin/services']);
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




