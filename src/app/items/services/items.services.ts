import {Injectable} from '@angular/core';

import {BaseService} from './../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

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

    addItem(data,files){
        
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
              const formData = new FormData();
              if (files.length) {
                  formData.append('image', files[0], files[0].name);
              }
              for (let key in data) {
                  formData.append(key, data[key]);
              }
    
              xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response);
                    } else {
                        observer.error(xhr.response);
                    }
                }
            }
    
              xhr.open('POST', this.url, true);
              xhr.setRequestHeader("authorization", 'Bearer '+localStorage.getItem('token'));
              xhr.send(formData);
            });
    
        // return this.http.post(this.url ,data,this.getOptionsWithToken());
    }

}




