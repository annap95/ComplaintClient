import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

export class NbUserMenuItem {

  title: string;
  link?: string;
  url?: string;
  target?: string;
  icon?: string;

}

@Component({
  selector: 'nb-user',
  styleUrls: ['nb-user.scss'],
  templateUrl: 'nb-user.html',
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

  @Input() name: string = 'Anonymous';

  @Input() picture: string;

  /**
   * Color of the area shown when no picture specified
   * @type string
   */
  @Input() color: string;

  /**
   * List of menu items for a user context menu (shown when clicked)
   * @type NbUserMenuItem[]
   */
  @Input() menu: NbUserMenuItem[] = [];

  /**
   * Size of the component, small|medium|large
   * @type string
   */
  @Input()
  set size(val: string) {
    this.sizeValue = val;
  }

  /**
   * Whether to show a user name or not
   * @type boolean
   */
  @Input()
  set showName(val: boolean) {
    this.showNameValue = convertToBoolProperty(val);
  }

  /**
   * Whether to show a user initials (if no picture specified) or not
   * @type boolean
   */
  @Input()
  set showInitials(val: boolean) {
    this.showInitialsValue = convertToBoolProperty(val);
  }

  /**
   * Whether to show only a picture or also show the name and title
   * @type boolean
   */
  @Input()
  set onlyPicture(val: boolean) {
    this.showNameValue = !convertToBoolProperty(val);
  }

  /**
   * Makes colors inverse based on current theme
   * @type boolean
   */
  @Input()
  set inverse(val: boolean) {
    this.inverseValue = convertToBoolProperty(val);
  }

  /**
   * Outputs when a context menu item is clicked
   * @type EventEmitter<NbUserMenuItem>
   */
  @Output() menuClick = new EventEmitter<NbUserMenuItem>();

  showNameValue: boolean = true;
  showInitialsValue: boolean = true;
  isMenuShown: boolean = false;

  constructor(private el: ElementRef) { }

  itemClick(event: any, item: NbUserMenuItem): boolean {
    this.menuClick.emit(item);
    return false;
  }

  /**
   * Toggles a context menu
   */
  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  @HostListener('document:click', ['$event'])
  hideMenu(event: any) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isMenuShown = false;
    }
  }

  getInitials(): string {
    if (this.name) {
      const names = this.name.split(' ');

      return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
    }

    return '';
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
