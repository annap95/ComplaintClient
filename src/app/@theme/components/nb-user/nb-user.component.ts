import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

export class NbUserMenuItem {

  title: string;
  icon?: string;

}

@Component({
  selector: 'nb-user',
  styleUrls: ['nb-user.component.scss'],
  templateUrl: 'nb-user.component.html',
})
export class NbUserComponent {

  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';
  static readonly SIZE_XLARGE = 'xlarge';

  private sizeValue: string;

  @HostBinding('class.inverse') inverseValue: boolean;

  @HostBinding('class.small')
  get small() {
    return this.sizeValue === NbUserComponent.SIZE_SMALL;
  }

  @HostBinding('class.medium')
  get medium() {
    return this.sizeValue === NbUserComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.large')
  get large() {
    return this.sizeValue === NbUserComponent.SIZE_LARGE;
  }

  @HostBinding('class.xlarge')
  get xlarge() {
    return this.sizeValue === NbUserComponent.SIZE_XLARGE;
  }

  @Input() menu: NbUserMenuItem[] = [];

  @Input()
  set size(val: string) {
    this.sizeValue = val;
  }

  @Input()
  set inverse(val: boolean) {
    this.inverseValue = convertToBoolProperty(val);
  }

  @Output() menuClick = new EventEmitter<NbUserMenuItem>();

  isMenuShown: boolean = false;

  constructor(private el: ElementRef) { }

  itemClick(event: any, item: NbUserMenuItem): boolean {
    this.menuClick.emit(item);
    return false;
  }

  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  @HostListener('document:click', ['$event'])
  hideMenu(event: any) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isMenuShown = false;
    }
  }

  hasMenu(): boolean {
    return this.menu && this.menu.length > 0;
  }

}

export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();

    return (val === 'true' || val === '');
  }

  return !!val;
}
