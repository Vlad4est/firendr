import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  username: string = "";
  password: string = "";

  login() {
    console.log(this.username);
    localStorage.setItem("username", this.username);
    this.router.navigate(["homepage"]);
  }

  constructor(private router: Router) {
    const username = localStorage.getItem("username");
    if(username) {
      this.username = username;
    }
  }
  

}
