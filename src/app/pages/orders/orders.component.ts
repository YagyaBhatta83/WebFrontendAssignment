import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRoute } from '@angular/router';

import {ClientRequestService} from './../../client/services/client.request.service';




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  myorders;

  constructor(public router: Router,public clientservice:ClientRequestService) { 

  	var clientToken = localStorage.getItem('Client_Token');

      const helper = new JwtHelperService();

    if (!clientToken || helper.isTokenExpired(clientToken)) {
    	this.router.navigate(['login'])
    }



    this.clientservice.viewmyorder().subscribe(
         ((data:any) =>{
           console.log("Items>>",data);
           this.myorders = data;
         }),error=>{
           console.log("error>>",error);
         });   


  }

  ngOnInit() {
  }
  

}
