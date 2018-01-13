import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../@core/services/auth.service";

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  userRole: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
  }
}
