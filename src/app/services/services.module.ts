import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { ServicesRoutingModule } from "./services-routing.module";
import { ServicesComponent } from "./services.component";
import {ServicesService} from './service_services/services.services';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

// import {OurServicesService} from './../our-services/services/our_services.services';

import { AddServiceComponent } from './add-service/add-service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        ServicesRoutingModule,
        NgxDatatableModule,
        FormsModule,
        NgbModule

    ],
    declarations: [
        ServicesComponent,
        ServiceDetailComponent,
        AddServiceComponent
    ],
    providers:[ServicesService]
})
export class ServicesModule { }
