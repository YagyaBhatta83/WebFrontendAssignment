import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { SchedulesRoutingModule } from "./schedules-routing.module";
import { SchedulesComponent } from "./schedules.component";
import {SchedulesService} from './services/schedules.services';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

// import {OurServicesService} from './../our-services/services/our_services.services';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        SchedulesRoutingModule,
        NgxDatatableModule,
        FormsModule,
        NgbModule

    ],
    declarations: [
        SchedulesComponent,
        ScheduleDetailComponent
       
    ],
    providers:[SchedulesService]
})
export class SchedulesModule { }
