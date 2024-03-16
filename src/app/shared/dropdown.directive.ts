import {
  Directive,
  HostBinding,
  HostListener,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  // constructor(private templateRef: TemplateRef, viewRef) {}
}
