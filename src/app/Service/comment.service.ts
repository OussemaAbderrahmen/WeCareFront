import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../components/forum/add-post/add-post.component';



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }


  addComment(comment:Comments,postId:number){
    return this.http.post<Comments>(`http://localhost:8089/wecare/forum/add-comment/${postId}/2`,comment)
  }

  commentOnComment(comment:Comments,commentId:number){
    return this.http.post<Comments>(`http://localhost:8089/wecare/forum/addcommenttocomment/${commentId}/2`,comment)
  }

  retrieveAllComments(){
    return this.http.get<Comments[]>(`http://localhost:8089/wecare/forum/retrieve-all-comments`)
  }


  // retrieveCommentsByPostId(){
  //   return this.http.get<Comments[]>(http://localhost:8089/wecare/forum/retrieve-comments-by-postid/6)
  // }

  likeComment(comment:Comments,commentId:number){
    return this.http.put("http://localhost:8089/wecare/forum/likecomment/"+commentId+"/2",comment);

   }

   dislikeComment(comment:Comments,commentId:number){
    return this.http.put(`http://localhost:8089/wecare/forum/dislikecomment/${commentId}/2`,comment);

   }

}