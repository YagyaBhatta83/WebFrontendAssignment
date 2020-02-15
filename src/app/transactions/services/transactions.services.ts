import {Injectable} from '@angular/core';

import {BaseService} from './../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';

import {Transactions}  from './../../shared/models/transactions.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class TransactionsService extends BaseService{
    constructor( 
        public http:HttpClient
    ){
        super('profile/admin/transaction');
    }


    getTransactions(){
        return this.http.get(this.url ,this.getOptionsWithToken());   
    }

}
