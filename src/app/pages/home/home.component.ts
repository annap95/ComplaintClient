import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'home.component.html',
  selector: 'home'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

}
