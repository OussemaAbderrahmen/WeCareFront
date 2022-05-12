import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WebSocketService } from "src/app/Service/web-socket.service";
import { ChatMessageDto } from "./chatMessageDto";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }



             
  
 
}
