import { Component, OnInit } from '@angular/core';

// import { Clients } from './../../shared/models/clients.model';

import {SchedulesService} from './../services/schedules.services';

import swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {

	schedule:any
  id;

  constructor( public schedulesservice:SchedulesService , public activeRouter: ActivatedRoute,
    public router: Router
) {

     this.id = this.activeRouter.snapshot.params['id'];

  }


  ngOnInit() {

    console.log('this id',this.id);
    this.schedule = {};

    this.schedulesservice.getSchedulesById(this.id).subscribe(((data:any) => {
      this.schedule = data;


      console.log('Data>>', this.schedule);


    }),error => {
      console.log('Error>>', error);

    });

  }


  submit(){

        swal.fire({
    title: 'Do you want to update the Schedule?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Update'
  }).then((result) => {
    if (result.value) {

    this.schedulesservice.updateSchedule(this.schedule).subscribe((data:any)=>{
      console.log("added successfully");
         swal.fire(
        'Updated!',
        'Schedule Updated.',
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

      console.log("Submitted>>>>>>>>>",this.schedule);



  }

  DeleteSchedule(){

        swal.fire({
    title: 'Do you want to delete the Schedule?',
    text: "You won't be able to revert it back",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete'
  }).then((result) => {
    if (result.value) {


      //dev
    this.schedulesservice.deleteSchedule(this.schedule._id).subscribe((data:any)=>{
      console.log("Deleted successfully");
         swal.fire(
        'Deleted!',
        'Schedule Deleted.',
        'success'
      )
          this.router.navigate(['/admin/schedules']);
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




