import { Component, OnInit } from '@angular/core';

// import { Clients } from './../../shared/models/clients.model';

import {ServicesService} from './../service_services/services.services';

import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  newservice:any;
  files =[];

  constructor(public servicesservice:ServicesService,  public router: Router ) { 
  	this.newservice = {};
  }

  ngOnInit() {
  }

  submit(){
    console.log("Submitted>>>>>>>>>",this.newservice);

    this.servicesservice.addService(this.newservice,this.files).subscribe((data:any)=>{
      console.log("added successfully");
         swal.fire(
        'Added!',
        'Service Added.',
        'success'
      )

       this.router.navigate(['/admin/services']);
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
