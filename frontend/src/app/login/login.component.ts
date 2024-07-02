import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  username: string = "";
  password: string = "";

  login() {
    this.appService.getUserByUsername(this.username).subscribe({
      next: (user) => {
        if(user && user?.username){
          localStorage.setItem("username", user?.username);
          this.router.navigate(["homepage"]);
        }
      },
      error: (error) => {
        console.log(error);
        alert(error.message);
      }
    });
    
   
  }

  constructor(private router: Router, private appService: AppService) {
    const username = localStorage.getItem("username");
    if(username) {
      this.username = username;
    }
  }
  

}
