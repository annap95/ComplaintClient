import {Component, Input} from "@angular/core";
import {Message} from "../../../@core/model/message";

@Component({
  selector: 'message-view',
  styleUrls: ['message-view.component.scss'],
  templateUrl: 'message-view.component.html',
})
export class MessageViewComponent {

  @Input()
  message: Message;

  constructor() { }

}
