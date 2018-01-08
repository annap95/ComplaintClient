import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS_ADMIN, MENU_ITEMS_CONSULTANT, MENU_ITEMS_CUSTOMER } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS_CUSTOMER;

  ngOnInit() {
    let userRole = localStorage.getItem('userRole');
    if(userRole == 'ADMIN')
      this.menu = MENU_ITEMS_ADMIN;
    else if(userRole == 'CONSULTANT')
      this.menu = MENU_ITEMS_CONSULTANT;
  }
}
