import {Injectable} from '@angular/core';

import {BaseService} from './../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Clients}  from './../../shared/models/clients.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class ItemsService extends BaseService{
    constructor( 
        public http:HttpClient
    ){
        super('items');
    }


    getItems(){
        return this.http.get(this.url ,this.getOptionsWithToken());   
    }

    getItemsById(id){
    	return this.http.get(this.url+ id ,this.getOptionsWithToken());   
    }

    updateItem(data){
        return this.http.put(this.url+ data._id ,data, this.getOptionsWithToken());   
    }

    deleteItem(id){
        return this.http.delete(this.url+ id , this.getOptionsWithToken());
    }

    addItem(data){
        return this.http.post(this.url ,data,this.getOptionsWithToken());
    }

}




