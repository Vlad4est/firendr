import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    {
      id: 1,
      user_id: 10,
      date: "Fri Jun 28 2024 11:46:22 GMT+0300 (Eastern European Summer Time)",
      title: "post 1",
      desciption: "this is my first post"
    },
    {
      id: 2,
      user_id: 10,
      date: "Fri Jun 28 2024 11:46:22 GMT+0300 (Eastern European Summer Time)",
      title: "post 2",
      desciption: "this is my first post"
    },
    {
      id: 3,
      user_id: 10,
      date: "Fri Jun 28 2024 11:46:22 GMT+0300 (Eastern European Summer Time)",
      title: "post 3",
      desciption: "this is my first post"
    }
    
  ];
  title: string = "";
  desciption : string = "";

  createPost(){
    this.posts.push(
      {
      title: this.title, 
      desciption: this.desciption,
      date: new Date()
     }
    );
}
}
