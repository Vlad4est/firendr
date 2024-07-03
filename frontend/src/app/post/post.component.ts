import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post: any;
  userAvatarUrl =
    'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';

  likePost(){
    console.log("liked " + this.post.id);
  }

}
