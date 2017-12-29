import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'home-admin.component.html',
  selector: 'home-admin'
})
export class HomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

}
