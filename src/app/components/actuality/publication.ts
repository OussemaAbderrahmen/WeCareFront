import { User } from "../user/user"
import { PubComment } from "./pubComment"
import { theme } from "./theme"


export class Publication {
    publicationId!:number
    publicationTitle!:string
    publicationDescription!:string
    image!: string
      publicationDate!: Date
      theme!: theme
      likelist! :User[]
      commentpost! : PubComment[]
      user ! : User

  }

  
  