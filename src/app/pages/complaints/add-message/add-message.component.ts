import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../@core/services/auth.service";

@Component({
  selector: 'add-message',
  styleUrls: ['add-message.component.scss'],
  templateUrl: 'add-message.component.html',
})
export class AddMessageComponent implements OnInit {

  @Input()
  complaintId: number;

  userRole: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
  }

}
