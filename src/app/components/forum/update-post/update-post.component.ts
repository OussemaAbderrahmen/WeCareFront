import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/models/Posts';
import { PostServiceService } from 'src/app/Service/PostService/post-service.service';


@Component({
  selector: 'app-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id !: number 
  post !: Posts
 
  constructor(
    public postService : PostServiceService,
    public route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.post=new Posts(this.id,"","",10,new Date(),"",0,0,[]);
    if(this.id!=-1){
      this.postService.retirievePost(this.id).subscribe(
        
        data=>this.post=data
      )
    }
  }

  updatePost(){

    this.postService.updatePost(this.post,this.id).subscribe(
      data=>{
        console.log(data),
        this.router.navigate(['forum'])
      }
    )
  }
}

