import { Comments } from "./Comments";


export class Posts{

    constructor(
      public postId : number,
      public titlePost : string,
      public descriptionPost : string,
      public nbComment : number,
      public datePost : Date,
      public imagePost : string,
      public nbLikes : number,
      public nbDislikes : number,
      public commentposts:Comments[]
      
  
    ){
  
    }
  }