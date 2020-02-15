import {Injectable} from '@angular/core';

import {BaseService} from './../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Clients}  from './../../shared/models/clients.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class UsersService extends BaseService{
    constructor( 
        public http:HttpClient
    ){
        super('users');
    }


    getUsers(){
        return this.http.get(this.url ,this.getOptionsWithToken());   
    }

    getUsersById(id){
    	return this.http.get(this.url+ id ,this.getOptionsWithToken());   
    }

    updateUser(data){
        return this.http.put(this.url+ data._id ,data, this.getOptionsWithToken());   
    }

    deleteUser(id){
        return this.http.delete(this.url+ id , this.getOptionsWithToken());
    }

    addUser(data){
        return this.http.post(this.url ,data,this.getOptionsWithToken());
    }

}




