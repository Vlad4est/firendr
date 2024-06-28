import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit{
  @Input() post: any;

  likePost(){
    console.log("liked " + this.post.id);
  }
  ngOnInit(): void {
    console.log(this.post);
  }
}
