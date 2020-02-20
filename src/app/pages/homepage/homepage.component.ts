import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import {ItemsService} from './../../items/services/items.services';
import {ServicesService} from './../../services/service_services/services.services';
import {ClientRequestService} from './../../client/services/client.request.service';



// import { ClientRequestService } from "./../services/client.request.service"
// import {AuthGuard} from '../../auth/auth-guard.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  services;
  items;
  place_order;
  loggedin;

  constructor(public router: Router,public itemsservice:ItemsService,public services_service:ServicesService,public clientservice:ClientRequestService


  ) {


    this.itemsservice.getItems().subscribe(
         ((data:any) =>{
           console.log("Items>>",data);
           this.items = data;

         }),error=>{
           console.log("error>>",error);
         });   


    this.services_service.getServices().subscribe(
         ((data:any) =>{
           console.log("Services>>",data);
           this.services = data;

         }),error=>{
           console.log("error>>",error);
         });   

    this.place_order = {};

    this.loggedin = this.checklogin();

          }

  ngOnInit() {


  }

  checklogin(){

      var clientToken = localStorage.getItem('Client_Token');

    if (clientToken) {

      const helper = new JwtHelperService();
      if (!helper.isTokenExpired(clientToken)) {
        console.log('token available')
        return true;
      }
    }

    console.log('Client token unavailable')
    return false;


  }

  isLoggedIn() {
    var clientToken = localStorage.getItem('Client_Token');

    if (clientToken) {

      const helper = new JwtHelperService();
      if (!helper.isTokenExpired(clientToken)) {
        console.log('token available')
        return true;
      }
    }

    console.log('Client token unavailable')
    this.router.navigate(['login'])
    return false;


  }

    order(){
      console.log('Order Clicked');
      console.log('Ordered>>>',this.place_order);

    this.clientservice.placeorder(this.place_order).subscribe(
         ((data:any) =>{
           console.log("Placed>>",data);

         }),error=>{
           console.log("error>>",error);
         });   
    }

    logout(){
      localStorage.clear();
      this.router.navigate(['/login']);

    }


}



