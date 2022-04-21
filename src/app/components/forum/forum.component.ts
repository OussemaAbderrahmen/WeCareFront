import { Component, Injectable, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/Service/post-service.service';
import { Router } from '@angular/router';


export class Posts{

  constructor(
    public postId : number,
    public titlePost : string,
    public descriptionPost : string,
    public nbComment : number,
    public datePost : Date,
    public imagePost : string
  ){

  }
}


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})


export class ForumComponent implements OnInit {

   listPosts: Posts[] = [];


  constructor(
    public postService : PostServiceService,
    public router : Router
    
    ) { }

  ngOnInit(): void {
    this.postService.retrieveAllPosts().subscribe(
      response => {
        console.log(response);
        this.listPosts=response;
      }
    );
  }


   message ="";
   deletePost(id:number){

    console.log(`delete post ${id}`);
    this.postService.deletePost(id).subscribe(
        response=>{
          console.log(response);
          this.message = `  post ${id} deleted successfully `;
         this.postService.retrieveAllPosts().subscribe(
            response => {
              console.log(response);
            this.listPosts=response;
           }
         );
          
       }
        
  )
   
   }
}
