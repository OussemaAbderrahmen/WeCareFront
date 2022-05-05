
export class Comments{
    constructor(
      public commId:number,
      public comment : string,
      public commentDate:Date,
      public nbLikesComment:number,
      public nbDislikesComments:number,
      public responseCommentId : number,
      public responseComment: Comments[]=[]
    ){}
  }