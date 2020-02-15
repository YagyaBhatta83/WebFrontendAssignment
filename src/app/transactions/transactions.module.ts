import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { TransactionsRoutingModule } from "./transactions-routing.module";

import { TransactionsComponent } from "./transactions.component";

import {TransactionsService} from './services/transactions.services';


@NgModule({
    imports: [
        CommonModule,
        TransactionsRoutingModule,
        NgxDatatableModule
    ],
    declarations: [
        TransactionsComponent
    ],
    providers: [ TransactionsService ]
})
export class TransactionsModule { }
