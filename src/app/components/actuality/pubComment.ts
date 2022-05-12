import { User } from "../user/user";
import { Publication } from "./publication";

export class PubComment {
     commentId!: number
	 comment!:String
	 commentDate! :Date;
    commentImage!:String;
    pu! :Publication;
    u!:User;


  }