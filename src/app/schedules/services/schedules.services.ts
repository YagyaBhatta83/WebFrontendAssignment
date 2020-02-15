import {Injectable} from '@angular/core';

import {BaseService} from './../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Clients}  from './../../shared/models/clients.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class SchedulesService extends BaseService{
    constructor( 
        public http:HttpClient
    ){
        super('schedules');
    }


    getSchedules(){
        return this.http.get(this.url ,this.getOptionsWithToken());   
    }

    getSchedulesById(id){
    	return this.http.get(this.url+ id ,this.getOptionsWithToken());   
    }

    updateSchedule(data){
        return this.http.put(this.url+ data._id ,data, this.getOptionsWithToken());   
    }

    deleteSchedule(id){
        return this.http.delete(this.url+ id , this.getOptionsWithToken());
    }

    addSchedule(data){
        return this.http.post(this.url ,data,this.getOptionsWithToken());
    }

}




