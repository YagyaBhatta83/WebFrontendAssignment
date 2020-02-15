import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";
import {ItemsService} from './services/items.services';
import { ItemDetailComponent } from './item-detail/item-detail.component';

// import {OurServicesService} from './../our-services/services/our_services.services';

import { AddItemComponent } from './add-item/add-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        ItemsRoutingModule,
        NgxDatatableModule,
        FormsModule,
        NgbModule

    ],
    declarations: [
        ItemsComponent,
        ItemDetailComponent,
        AddItemComponent
    ],
    providers:[ItemsService]
})
export class ItemsModule { }
