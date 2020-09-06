import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  invalidLogin: boolean = true;
  message: string;


  constructor(private loginService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    
  }
 
  // checkLogin(){
  //   this.loginService.authenticate(this.userName, this.password).subscribe(
  //     data => {
  //     this.invalidLogin = false;
  //     this.router.navigate(['']);
  //   }),
  //   error => {
  //     this.invalidLogin = true;
  //   };
    
  // }

  loginUser(){
    this.loginService.authenticate(this.userName, this.password).subscribe(
      data => { 
        console.log(data)
        this.invalidLogin = false;
        this.router.navigate(['']);
      },
      error => {
        console.log("error occurred")
        this.invalidLogin = true;
        this.message = "Please enter valid credentials"
    }
    )
    // this.emailId = " ";
    // this.password= "";
  }
}
