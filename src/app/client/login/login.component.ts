import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientRequestService } from "./../services/client.request.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user;
  errors;

  constructor(private router: Router,
    // private route: ActivatedRoute,
    public requestservice: ClientRequestService
  ) {
    this.user = {};
  }

  ngOnInit() {

  }

  login() {
    console.log('Login Clicked---->');
    console.log('data--->', this.user)

    this.requestservice.login(this.user).subscribe(
      (data: any) => {
        console.log("data.--->", data)
        localStorage.setItem('Client_Token', data.token);
        this.router.navigate(['home'])

      },
      (error) => {
        console.log("Error---->", error);
        this.errors = error

      }
    )

  }

}

