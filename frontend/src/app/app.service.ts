import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private domain: string;


  constructor(private http: HttpClient){ 
    //this.domain = "https://friender-backend-ir3eegisoa-ey.a.run.app";
    this.domain = "http://localhost:3000";
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.domain}/users/${username}`, { observe: "response" });
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.domain}/auth/login`, userData, { observe: "response"} );
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.domain}/auth/register`, userData, { observe: "response"} );
  }

  getPosts(): Observable<any> {
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    return this.http.get(`${this.domain}/posts`, { headers });

  }

  createPost(postData: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.domain}/posts`, postData, { headers });
  }
}
