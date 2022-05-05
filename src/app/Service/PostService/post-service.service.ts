import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../models/Posts';
import { Comments } from '../../models/Comments';




@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  retrieveAllPosts(){
    return this.http.get<Posts[]>('http://localhost:8089/wecare/forum/get-all-posts')
   }

   getBestPosts(){
    return this.http.get<Posts[]>('http://localhost:8089/wecare/forum/get-best-post-by-month')
   }

   deletePost(id:number){
    return this.http.delete(`http://localhost:8089/wecare/forum/delete-post/${id}`)
     }
    
     retirievePost(id:number){
       return this.http.get<Posts>(`http://localhost:8089/wecare/forum/get-post-by-id/${id}`)
     }
    
    
     updatePost(post:Posts,id:number){
    
       return this.http.put(`http://localhost:8089/wecare/forum/update-post/${id}`,post);
    
     }
    
     savePost(post:Posts){
    
       return this.http.post(`http://localhost:8089/wecare/forum/create-post`,post);
    
     }

   
     likePost(post:Posts,idPost:number){
      return this.http.put(`http://localhost:8089/wecare/forum/likepost/${idPost}/2`,post);

     }

     dislikePost(post:Posts,idPost:number){
      return this.http.put(`http://localhost:8089/wecare/forum/disLikepost/${idPost}/2`,post);

     }
     retrieveCommentsByPostId(idPost:number){
        return this.http.get<Comments[]>(`http://localhost:8089/wecare/forum/retrieve-comments-by-postid/${idPost}`);
       }
  
}
