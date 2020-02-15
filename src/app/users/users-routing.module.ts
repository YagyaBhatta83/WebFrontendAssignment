import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
     component: UsersComponent,
    data: {
      title: 'Users'
    }
    
  },
  {
    path: 'detail/:id',
     component: UserDetailComponent,
    data: {
      title: 'Users Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }