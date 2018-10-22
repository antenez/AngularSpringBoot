import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // if you want to use it in template it need to be declared. By marking it public we are declaring it as publicaly available.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
