import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';

import { ItemDetailComponent } from './item-detail/item-detail.component';

import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {
    path: '',
     component: ItemsComponent,
    data: {
      title: 'Items'
    }
    
  },
  {
    path: 'detail/:id',
     component: ItemDetailComponent,
    data: {
      title: 'Items Detail'
    }
  },
  {
    path: 'add',
    component: AddItemComponent,
    data: {
      title: 'Add Item'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule { }