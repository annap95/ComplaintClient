import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'home-consultant.component.html',
  selector: 'home-consultant'
})
export class HomeConsultantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

}
