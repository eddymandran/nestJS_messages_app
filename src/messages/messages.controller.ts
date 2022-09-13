import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DON'T DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION INSTEAD
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get("/:id")
  getMessages(@Param("id") id: string) {
    return this.messagesService.findOne(id);
  }

}
