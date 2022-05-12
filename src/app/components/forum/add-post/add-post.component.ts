import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/models/Posts';
import { PostServiceService } from '../../../Service/PostService/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  id !: number 
  post !: Posts
  
  constructor( public postService : PostServiceService,
    public route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.post=new Posts(this.id,"","",0,new Date(),"",0,0,[]);
  }
  addPost(){
  
    this.postService.savePost(this.post).subscribe(
      data=>{
        console.log(data),
        this.router.navigate(['forum'])})  
  } 
}
