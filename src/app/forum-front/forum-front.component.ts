import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { Comments } from '../models/Comments';

import { Posts } from '../models/Posts';
import { CommentService } from '../Service/CommentService/comment.service';
import { PostServiceService } from '../Service/PostService/post-service.service';


@Component({
  selector: 'app-forum-front',
  templateUrl: './forum-front.component.html',
  styleUrls: ['./forum-front.component.scss']
})
export class ForumFrontComponent implements OnInit {
  listPosts: Posts[] =[];
  listComments : any[]=[];
  listResponseComment : Comments[]=[];
  comment !: Comments;
  responseComment !: Comments;
  id !: number 
  idComment!:number
  constructor(
    public postService: PostServiceService,
    public commentService : CommentService,
    public route : ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.comment=new Comments(this.id,"",new Date(),0,0,0,[]);
    this.responseComment= new Comments(this.id,"",new Date(),0,0,this.idComment,[])
    this.postService.retrieveAllPosts().subscribe(
      response => {
        console.log(response);
        this.listPosts = response;

    //     for (let i in this.listPosts)
    //     //console.log(this.listPosts[i].postId)
    //     this.postService.retrieveCommentsByPostId(this.listPosts[i].postId).subscribe(
    //    data=>{
    //      this.listComments=data
    //    console.log(data)}
    //  )

      }
      );
   
      
      
   
  }
  commentPost(postId:number) {
    this.commentService.addComment(this.comment,postId).subscribe(
      response=>{
           console.log("adding a comment ..")
           this.commentService.retrieveAllComments().subscribe(
             response => {
      console.log(response);
      this.listComments = response;
      this.ngOnInit()
    })
      }
    )
 
   }
 
   commentOnComment(commentId:number){
  this.commentService.commentOnComment(this.comment,commentId).subscribe(
    response2=>{
      console.log("adding a comment on comment ")
      this.commentService.retrieveAllComments().subscribe(
        response => {
         console.log(response2);
         this.listResponseComment = response;
          this.ngOnInit()
})
    }
  )
  }


  likePost(post: Posts, id: number) {
    this.postService.likePost(post, id).subscribe(
      response => {
        console.log("Like is Working great !!!");
        this.postService.retrieveAllPosts().subscribe(
          response => {
            this.ngOnInit();
            this.listPosts = response;
          })
      }
    )
  }


  dislikePost(post : Posts,id:number) {
    this.postService.dislikePost(post, id).subscribe(
      response => {
        console.log("dislike is Working great !!!");
        this.postService.retrieveAllPosts().subscribe(
          response => {
            console.log(response);
            this.listPosts = response;
          })
      }
    )
  }


  likeComment(comment:Comments,id:number){
    console.log(id)
    this.commentService.likeComment(comment,id).subscribe(
      response => {
        console.log("Like comment is Working great !!!");
         this.commentService.retrieveAllComments().subscribe(
                    response => {
             console.log(response);
             this.listComments = response;
             this.ngOnInit()
           })
      }
    )
  }

  dislikeComment(comment:Comments,id:number){
    this.commentService.dislikeComment(comment,id).subscribe(
      response => {
        console.log("disLike comment is Working great !!!");
        this.commentService.retrieveAllComments().subscribe(
                   response => {
            console.log(response);
            this.listComments = response;
            this.ngOnInit()
          })
      }
    )

  }

  
 

}
