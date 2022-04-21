import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../components/forum/forum.component';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  retrieveAllPosts(){
    return this.http.get<Posts[]>('http://localhost:8089/wecare/forum/get-all-posts')
   }

   deletePost(id:number){
    return this.http.delete(`http://localhost:8089/wecare/forum/delete-post/${id}`)
     }
    
    // retirievePost(id:number){
    //   return this.http.get<Posts>(`http://localhost:8089/wecare/forum/update-post/${id}`)
    // }
    
    
    // updatePost(post:Posts){
    
    //   return this.http.put(`http://localhost:8089/drnagati/falguiere/update-fal`,post);
    
    // }
    
    // savePost(post:Posts){
    
    //   return this.http.post(`http://localhost:8089/drnagati/falguiere/add-fal`,post);
    
    // }
}
