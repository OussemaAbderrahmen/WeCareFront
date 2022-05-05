import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/Service/dictionaryService/dictionary.service';
import { Posts } from 'src/app/models/Posts';
import { Dictionary } from 'src/app/models/Dictionary';
import { PostServiceService } from 'src/app/Service/PostService/post-service.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})


export class ForumComponent implements OnInit {

   listPosts: Posts[] = [];
   bestPosts : Posts[]=[];
   listWords : Dictionary[] = [];

  constructor(
    public postService : PostServiceService,
    public dictionaryService : DictionaryService,
    public router : Router
    
    ) { }

  ngOnInit(): void {
    this.postService.retrieveAllPosts().subscribe(
      response => {
        console.log(response);
        this.listPosts=response;
      }
    );

    this.dictionaryService.retrieveAllWords().subscribe(
      response=>{
        console.log(response);
        this.listWords=response;
      }
    )
   
  }


   message ="";
   deletePost(id:number){
if(window.confirm("Are you sure you want to delete this post !!")){
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


   deleteWord(id:number){
    if(window.confirm("Are you sure you want to delete this Word !!")){
      console.log(`delete word ${id}`);
        this.dictionaryService.deleteWord(id).subscribe(
            response=>{
              console.log(response);
              this.message = `  word ${id} deleted successfully `;
             this.dictionaryService.retrieveAllWords().subscribe(
                response => {
                  console.log(response);
                this.listWords=response;
               }
             );
              
           }
            
      )
    }
        
       
       }

   updatePost(id:number){
    console.log(`update post ${id}`)
    this.router.navigate(['post',id])
  }

  addPost(){
    
    this.router.navigate(['addpost'])
  }

  addWord(){
    this.router.navigate(["addictionary"])
  }

  updateWord(id:number){
   console.log(`update word ${id}`)
   this.router.navigate(['updatedictionary',id])
  }
}
