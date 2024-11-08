import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  
  createPostFrom = this.fb.group({
    author : "",
    title: ["", Validators.required],
    description: ["", Validators.required]
  });
  constructor(private fb: FormBuilder, private appService: AppService, private router: Router)  {}
  
  onSubmit() {
    console.log(this.createPostFrom.value);
    let postData = this.createPostFrom.value;
    postData.author = localStorage.getItem("username");
    console.log(postData);
    this.appService.createPost(postData).subscribe(
      (response) => {
        
        console.log('POST response:', response);
        alert(response.message)
        this.router.navigate(["/homepage"]);
      },
      (error) => {
        console.log('POST error:', error);
        alert(error.statusText);
      }
    );
    


  }

}
