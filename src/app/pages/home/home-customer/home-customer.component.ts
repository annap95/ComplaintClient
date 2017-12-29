import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'home-customer.component.html',
  selector: 'home-customer'
})
export class HomeCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

}
