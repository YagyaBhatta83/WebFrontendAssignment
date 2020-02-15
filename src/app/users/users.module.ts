import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import {UsersService} from './services/users.services';
import { UserDetailComponent } from './user-detail/user-detail.component';

// import {OurServicesService} from './../our-services/services/our_services.services';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        NgxDatatableModule,
        FormsModule,
        NgbModule

    ],
    declarations: [
        UsersComponent,
        UserDetailComponent
       
    ],
    providers:[UsersService]
})
export class UsersModule { }
