import { environment } from './../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


export class BaseService{
    url;
    constructor(PostUrl:String){
        this.url = environment.BaseUrl + PostUrl+'/';
    }
    getOptions(){
        return {
            headers: new HttpHeaders({
            'content-Type':'application/json'
            })
        }
    }

    getOptionsWithToken(){
        return {
            headers: new HttpHeaders({
            'content-Type':'application/json',
            'authorization':'Bearer '+localStorage.getItem('token')
            })
        }
    }


    getOptionsWithClientToken(){
        return {
            headers: new HttpHeaders({
            'content-Type':'application/json',
            'authorization':'Bearer '+localStorage.getItem('Client_Token')
            })
        }
    }

}


