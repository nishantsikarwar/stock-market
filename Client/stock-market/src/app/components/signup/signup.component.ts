import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { Router } from '@angular/router'

import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User ={
    emailId: "",
    userName: "",
    password: "",
    mobileNo: "",
    active: true,
    userType: "user"
  }
  message: string = "";
  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.user)
    this.service.register(this.user).subscribe(
      data => {
        // console.log(data);
        this.router.navigate(['']);
      },
      error => {
        this.message = "User with this username already exits"
        this.user.userName=""
      }
    )
  }
}
