import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { DropDownService } from '../../../services/dropdown.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-multiple-menu-container]',
  template: `<ng-content></ng-content>`,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    'role': 'combobox',
    'aria-controls': 'dropdown-multiple-menu',
  },
  standalone: true
})
export class B2bDropDownMultipleMenuContainerComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() enterKeyDown = new EventEmitter<any>();

  get menuExpanded() {
    return this.dropDownService.menuExpanded;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.el.nativeElement.contains(document.activeElement) && event.key === "Enter") {
      const isReadOnlyInput = document.activeElement?.classList?.contains('read-only');
      if (isReadOnlyInput) {
        return;
      }
      this.onEnterKeyDown();
    }
  }

  constructor(private dropDownService: DropDownService, private el: ElementRef) {}

  private onEnterKeyDown() {
    if (this.dropDownService.menuCurrentIndex() === -1) {
      this.toggleDropDownMenu();
    } else {
      this.enterKeyDown.emit(this.dropDownService.menuCurrentResult);
    }
  }

  private toggleDropDownMenu() {
    if (this.menuExpanded()) {
      this.dropDownService.closeMenu();
    } else {
      this.dropDownService.openMenu();
    }
  }
}
