import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulesComponent } from './schedules.component';

import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';


const routes: Routes = [
  {
    path: '',
     component: SchedulesComponent,
    data: {
      title: 'Schedules'
    }
    
  },
  {
    path: 'detail/:id',
     component: ScheduleDetailComponent,
    data: {
      title: 'Schedules Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesRoutingModule { }