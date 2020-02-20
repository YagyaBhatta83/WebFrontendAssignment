
import { Injectable } from '@angular/core';
import { User } from './../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../shared/services/base.service';

import { environment } from './../../../environments/environment';



@Injectable()
export class ClientRequestService extends BaseService {
    constructor(
        public http: HttpClient
    ) {
        super('');
    }

    login(user: User) {
        console.log('client login service');
        return this.http.post(environment.BaseUrl + 'users/login', user, this.getOptions());
    }

    register(user) {
        console.log('client register service');
        return this.http.post(environment.BaseUrl + 'users/signup', user, this.getOptions());

    }

    placeorder(order){
        return this.http.post(environment.BaseUrl + 'schedules', order, this.getOptionsWithClientToken());
    }

    viewmyorder(){
        return this.http.get(environment.BaseUrl + 'schedules/myschedule', this.getOptionsWithClientToken());
    }


}
