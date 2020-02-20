import { Component, OnInit } from '@angular/core';
import { ClientRequestService } from '../services/client.request.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user;

  constructor(private requestservice: ClientRequestService,
    private router: Router,
    private activateroute: ActivatedRoute

  ) {
    this.user = {};
  }

  ngOnInit() {
  }

  register() {
    console.log('register clicked--->')
    console.log('data--->', this.user)

    this.requestservice.register(this.user).subscribe(
      (data: any) => {
        console.log("data.--->", data)
        localStorage.setItem('Client_token', data.token);
        this.router.navigate(['home'])

      },
      (error) => {
        console.log("Error---->", error)

      }
    )

  }
}


