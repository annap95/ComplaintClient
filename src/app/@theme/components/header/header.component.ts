import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {

  @Input() position = 'normal';

  userMenu = [
    {
      title: 'Profile',
      link: '/pages/profile',
    },
    {
      icon: 'ion-log-out',
      title: 'Log out',
      link: '/auth/logout',
    },
  ];

  constructor(private sidebarService: NbSidebarService, private router: Router) { }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.router.navigate(['/pages/complaints']);
  }
}
