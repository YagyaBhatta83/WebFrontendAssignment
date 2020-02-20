
import { Injectable } from '@angular/core';
import { User } from './../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../shared/services/base.service';

import { environment } from './../../../environments/environment';



@Injectable()
export class AuthRequestService extends BaseService {
    constructor(
        public http: HttpClient
    ) {
        super('');
    }

    login(user: User) {
        console.log('login service');
        return this.http.post(environment.BaseUrl + 'users/login', user, this.getOptions());
    }

    register(user: User) {

    }

    forgotPassword(user: User) {
        return this.http.post(environment.BaseUrl + 'forgot-password/admin', user, this.getOptions());
    }

    resetPassword(user: User) {
        return this.http.post(environment.BaseUrl + 'reset-password/admin', user, this.getOptions());
    }


    changePassword(user: User) {
        return this.http.put(environment.BaseUrl + 'profile/admin/change-password/', user, this.getOptionsWithToken());
    }

}
