import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  @Input() post: any;
  likeCount: number = 0;
  isLiked: boolean = false;
  imageURL: string = "";
  userAvatarUrl =
    'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';
  

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.imageURL = this.post?.imageURL;
    this.likeCount = this.post?.likes?.length;
    let username = localStorage.getItem("username");
    if(this.post?.likes?.includes(username)) {
      this.isLiked = true;
    }
    else {
      this.isLiked = false;
    }
  }

  likePost(){
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? 1 : -1;
    let username = localStorage.getItem("username")  || "";
    this.appService.likePost(this.post.id, username).subscribe(
      response => {
        console.log('Likes updated successfully');
        // Handle successful update (e.g., update UI)
      },
      error => {
        console.error('Error updating likes:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

}
