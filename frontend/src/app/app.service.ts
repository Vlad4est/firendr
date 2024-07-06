import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private domain: string;


  constructor(private http: HttpClient){ 
    this.domain = "https://friender-backend-ir3eegisoa-ey.a.run.app";
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.domain}/users/${username}`);

  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.domain}/posts`);
  }

  createPost(postData: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.domain}/posts`, postData, { headers });
  }
}
