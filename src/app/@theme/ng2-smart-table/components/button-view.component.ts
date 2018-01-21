import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ViewCell } from "./cell/cell-view-mode/view-cell";

@Component({
  selector: 'button-view',
  template: `
    <button *ngIf="renderValue != ''" (click)="onClick()" class="btn btn-success btn-semi-round btn-sm">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}
