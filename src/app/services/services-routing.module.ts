import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';

import { ServiceDetailComponent } from './service-detail/service-detail.component';

import { AddServiceComponent } from './add-service/add-service.component';

const routes: Routes = [
  {
    path: '',
     component: ServicesComponent,
    data: {
      title: 'Services'
    }
    
  },
  {
    path: 'detail/:id',
     component: ServiceDetailComponent,
    data: {
      title: 'Services Detail'
    }
  },
  {
    path: 'add',
    component: AddServiceComponent,
    data: {
      title: 'Add Service'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule { }