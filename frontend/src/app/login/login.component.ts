import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  username: string = "";
  password: string = "";
  loading: boolean = false;
  login() {
    this.loading = true;
    this.appService.getUserByUsername(this.username).pipe(first()).subscribe({
      next: (user) => {
        if(user && user?.username && user?.password) {
          localStorage.setItem("username", user?.username);
          localStorage.setItem("password", user?.password);
          this.router.navigate(["homepage"]);
        }
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
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
