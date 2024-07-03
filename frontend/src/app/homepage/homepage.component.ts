import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  username = 'Andrei';
  
  posts: any;
    constructor( private appService: AppService) {
      this.appService.getPosts().subscribe((posts) => {
        this.posts = posts;
      });
    }

    getUser() {}
  
    getPosts() {}

    onClickBtn ()
    {
      console.log("clicked");
    }
}
