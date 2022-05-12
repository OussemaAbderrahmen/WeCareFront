export class ChatMessageDto {
    username!: string;
    messages!: string;

    constructor(user: string, messages: string){
        this.username = user;
        this.messages = messages;
    }
}